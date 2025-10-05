import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BlogEmptyState, FeaturedPostCard, RecentPostCard } from "@/components/blog/cards";
import { getAllPostsMetadata } from "@/lib/blog";

export default function BlogLandingPage() {
  const posts = getAllPostsMetadata();

  if (!posts.length) {
    return (
      <BlogEmptyState
        title="Blog coming soon"
        message="We are preparing our first set of stories. Check back shortly for updates from the NITE team."
      />
    );
  }

  const [featured, ...rest] = posts;
  const olderPosts = rest.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-primary">Latest insight</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">From the NITE Lab</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Stories, experiments, and behind-the-scenes looks at how we build learning experiences with our community.
          </p>
        </div>
        {posts.length > 1 && (
          <Button asChild variant="outline">
            <Link href="/blog/all">View all posts</Link>
          </Button>
        )}
      </div>

      <div className="grid gap-12">
        <FeaturedPostCard post={featured} />

        {olderPosts.length > 0 && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold uppercase tracking-wider text-muted-foreground">
                Recent stories
              </h2>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/blog/all">Browse archive</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {olderPosts.map((post) => (
                <RecentPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
