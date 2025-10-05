import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed shadow-sm">
      {children}
    </div>
  );
}
