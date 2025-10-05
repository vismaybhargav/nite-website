import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { Button } from "@/components/ui/button";
import { mdxComponents } from "@/components/blog/mdx-components";
import {
  BLOG_FALLBACK_THUMBNAIL,
  formatBlogDate,
  getAllBlogSlugs,
  getPostBySlug,
} from "@/lib/blog";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageParams) {
  try {
    const { meta } = getPostBySlug(params.slug);
    const title = `${meta.title} | NITE Blog`;

    return {
      title,
      description: meta.description,
      openGraph: {
        title,
        description: meta.description,
        type: "article",
        publishedTime: meta.date,
        authors: meta.author ? [meta.author] : undefined,
        images: meta.thumbnail
          ? [
              {
                url: meta.thumbnail,
                width: 1200,
                height: 630,
                alt: meta.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: meta.description,
        images: meta.thumbnail ? [meta.thumbnail] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post || post.meta.draft) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center gap-3 text-sm text-muted-foreground">
        <Button asChild variant="ghost" size="sm" className="px-0 text-muted-foreground hover:text-primary">
          <Link href="/blog">Back to blog</Link>
        </Button>
        <span aria-hidden="true">-</span>
        <time dateTime={post.meta.date}>{formatBlogDate(post.meta.date)}</time>
        <span aria-hidden="true">-</span>
        <span>{post.meta.readingTimeMinutes} min read</span>
      </div>

      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-primary">{post.meta.tags?.[0] ?? "NITE"}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.meta.title}</h1>
        <p className="text-lg text-muted-foreground">{post.meta.description}</p>
        {post.meta.author && (
          <p className="text-sm text-muted-foreground">By {post.meta.author}</p>
        )}
      </header>

      <div className="relative my-10 overflow-hidden rounded-3xl border border-border">
        <Image
          src={post.meta.thumbnail ?? BLOG_FALLBACK_THUMBNAIL}
          alt={post.meta.title}
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="space-y-8">
        {content}
      </div>
    </article>
  );
}
