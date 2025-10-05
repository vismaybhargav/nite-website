import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArchivePostCard, BlogEmptyState } from "@/components/blog/cards";
import { getAllPostsMetadata } from "@/lib/blog";

export default function BlogArchivePage() {
  const posts = getAllPostsMetadata();

  if (!posts.length) {
    return (
      <BlogEmptyState
        title="Archive coming soon"
        message="Once we publish our first stories, you will be able to catch up on everything right here."
      >
        <Button asChild>
          <Link href="/blog">Back to blog</Link>
        </Button>
      </BlogEmptyState>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Archive</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">All blog posts</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Browse every story, project recap, and community highlight from the NITE team.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <ArchivePostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
