import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { Callout } from "./callout";

const headingClassNames = {
  h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
};

const paragraphClassName = "leading-7 text-lg text-muted-foreground";

const listClassName = "my-6 ml-6 space-y-2 text-lg text-muted-foreground";

const anchorClassName = "text-primary underline underline-offset-4 hover:text-primary/80";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h1 className={headingClassNames.h1} {...props} />,
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className={headingClassNames.h2} {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className={headingClassNames.h3} {...props} />,
  h4: (props: ComponentPropsWithoutRef<"h4">) => <h4 className={headingClassNames.h4} {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className={paragraphClassName} {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className={`list-disc ${listClassName}`} {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className={`list-decimal ${listClassName}`} {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="my-6 border-l-4 border-primary/30 pl-4 text-lg italic text-muted-foreground" {...props} />
  ),
  a: ({ href = "#", ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link href={href} className={anchorClassName} {...props} />
  ),
  img: ({ className, alt = "", ...props }: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={`my-8 w-full rounded-xl border border-border object-cover ${className ?? ""}`}
      {...props}
    />
  ),
  Callout,
};
