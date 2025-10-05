import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_FALLBACK_THUMBNAIL, formatBlogDate } from "@/lib/blog";

type CardProps = {
  post: BlogPostMeta;
};

export function BlogEmptyState({
  title,
  message,
  children,
}: {
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{message}</p>
      {children}
    </section>
  );
}

export function FeaturedPostCard({ post }: CardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.thumbnail ?? BLOG_FALLBACK_THUMBNAIL}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 960px, 100vw"
          priority
        />
      </div>
      <div className="space-y-4 p-8">
        <p className="text-sm text-muted-foreground">
          {formatBlogDate(post.date)} - {post.readingTimeMinutes} min read
        </p>
        <h2 className="text-3xl font-semibold tracking-tight group-hover:text-primary">
          {post.title}
        </h2>
        <p className="text-lg text-muted-foreground">{post.description}</p>
        {post.author && (
          <p className="text-sm text-muted-foreground">By {post.author}</p>
        )}
      </div>
    </Link>
  );
}

export function RecentPostCard({ post }: CardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.thumbnail ?? BLOG_FALLBACK_THUMBNAIL}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex h-full flex-col space-y-3 p-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {formatBlogDate(post.date)} - {post.readingTimeMinutes} min read
        </p>
        <h3 className="text-lg font-semibold leading-tight group-hover:text-primary">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground">{post.description}</p>
        <span className="mt-auto text-sm font-medium text-primary">Read story</span>
      </div>
    </Link>
  );
}

export function ArchivePostCard({ post }: CardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <Link
          href={`/blog/${post.slug}`}
          className="relative block h-56 w-full overflow-hidden sm:h-full sm:min-h-[240px] sm:w-80 sm:flex-none sm:self-stretch"
        >
          <Image
            src={post.thumbnail ?? BLOG_FALLBACK_THUMBNAIL}
            alt={post.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 640px) 320px, 100vw"
          />
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {formatBlogDate(post.date)} - {post.readingTimeMinutes} min read
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h3>
            <p className="text-lg text-muted-foreground">{post.description}</p>
          </div>
          <Button asChild variant="ghost" className="self-start px-0 text-primary hover:text-primary">
            <Link href={`/blog/${post.slug}`}>Read the story</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
