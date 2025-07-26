import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/blog") // TODO: Edit with correct path

export interface BlogPost {
	slug: string,
	metadata: {
		title: string,
		date: string,
		description: string,
		author?: string,
		category?: string,
		readTime?: string,
		[key: string]: unknown
	},
	content: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
	console.log(postsDirectory);
	try {
		if (!fs.existsSync(postsDirectory)) {
			fs.mkdirSync(postsDirectory, { recursive: true });
			return [];
		}

		const allPostsData = fs.readdirSync(postsDirectory)
			.filter((fileName) => fileName.endsWith(".mdx"))
			.map((fileName) => {
				const { data, content } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"));

				return {
					slug: fileName.replace(/\.mdx$/, ""),
					metadata: data as BlogPost["metadata"],
					content
				}
			})

		return allPostsData.sort((a, b) => {
			return a.metadata.date < b.metadata.date ? 1 : a.metadata.date === b.metadata.date ? 0 : -1;
		})
	} catch (error) {
		console.error("Error reading blog posts: ", error);
		return [];

	}
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.mdx`);

		if (!fs.existsSync(fullPath)) {
			return null;
		}

		const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

		return {
			slug,
			metadata: data as BlogPost["metadata"],
			content
		}
	} catch (error) {
		console.error(`Error fetching slug: ${slug} \nError:  ${error}`);
		return null;
	}
}
