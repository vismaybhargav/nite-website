import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const BLOG_FALLBACK_THUMBNAIL = "/blog/feature-placeholder.svg";

export const formatBlogDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

type RequiredFrontmatter = {
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
};

export type BlogPostMeta = RequiredFrontmatter & {
  slug: string;
  readingTimeMinutes: number;
};

export type BlogPost = {
  meta: BlogPostMeta;
  content: string;
};

type BlogFileEntry = {
  fileName: string;
  slug: string;
};

const MDX_EXTENSIONS = new Set([".md", ".mdx"]);

const isMdxFile = (fileName: string) => {
  const ext = path.extname(fileName).toLowerCase();
  return MDX_EXTENSIONS.has(ext) && !fileName.startsWith("_");
};

const toBaseName = (fileName: string) => fileName.replace(path.extname(fileName), "");

const slugify = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

const assertRequiredFrontmatter = (
  data: Record<string, unknown>,
  slug: string,
): RequiredFrontmatter => {
  const required = ["title", "description", "date"] as const;
  for (const key of required) {
    if (!data[key]) {
      throw new Error(`Missing frontmatter field '${key}' in blog post: ${slug}`);
    }
  }

  return {
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    author: data.author ? String(data.author) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    draft: typeof data.draft === "boolean" ? data.draft : false,
  };
};

const estimateReadingTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const readBlogDirectory = (): BlogFileEntry[] => {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const entries: BlogFileEntry[] = [];

  for (const fileName of fs.readdirSync(BLOG_DIR)) {
    if (!isMdxFile(fileName)) {
      continue;
    }

    const rawSlug = toBaseName(fileName);
    const cleanSlug = slugify(rawSlug);

    if (!cleanSlug) {
      throw new Error(`Unable to derive slug for blog file: ${fileName}`);
    }

    if (entries.some((entry) => entry.slug === cleanSlug)) {
      throw new Error(`Duplicate blog slug detected: ${cleanSlug}`);
    }

    entries.push({ fileName, slug: cleanSlug });
  }

  return entries;
};

const loadPostFromEntry = ({ fileName, slug }: BlogFileEntry): BlogPost => {
  const filePath = path.join(BLOG_DIR, fileName);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const frontmatter = assertRequiredFrontmatter(data, slug);

  return {
    meta: {
      ...frontmatter,
      slug,
      readingTimeMinutes: estimateReadingTime(content),
    },
    content,
  };
};

export const getAllBlogSlugs = (): string[] => readBlogDirectory().map((entry) => entry.slug);

export const getAllPostsMetadata = (): BlogPostMeta[] => {
  return readBlogDirectory()
    .map((entry) => loadPostFromEntry(entry).meta)
    .filter((meta) => !meta.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost => {
  const normalizedSlug = slugify(slug);
  const entry = readBlogDirectory().find((item) => item.slug === normalizedSlug);

  if (!entry) {
    throw new Error(`Unable to locate blog post: ${slug}`);
  }

  return loadPostFromEntry(entry);
};
