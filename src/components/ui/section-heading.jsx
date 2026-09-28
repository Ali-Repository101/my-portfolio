import { cn } from "@/lib/utils";

/** Section label + title + optional intro. Left-aligned, capped at a readable width. */
export function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <div className={cn("max-w-2xl", className)} data-aos="fade-up">
      {eyebrow && (
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
