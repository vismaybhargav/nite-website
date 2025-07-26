import { getAllPosts } from "@/lib/blog";
import BlogCallout from "@/app/component/blog/blog-callout";

export default async function BlogHeroPage() {
    const posts = await getAllPosts();

    // At this point, there will be one less post in the posts array
    const latestPost = posts.shift();

    return (
        <main className="bg-white min-h-screen">
            <div className="bg-white text-black">
                <h1 className="text-5xl p-5">Latest Post</h1>
                <div>
                    {latestPost !== undefined &&
                        <BlogCallout
                            title={latestPost?.metadata.title}
                            description={latestPost?.metadata.description}
                            date={latestPost?.metadata.date}
                        />
                    }
                    {latestPost === undefined &&
                        <div className="flex bg-red-600 text-white h-20 rounded-2xl items-center justify-center">
                            ERROR
                        </div>
                    }
                </div>
                <h1>More Posts</h1>
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 gap-5">
                    {posts.map((item, i) => (
                        <BlogCallout
                            title={item.metadata.title}
                            description={item.metadata.description}
                            date={item.metadata.date}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
