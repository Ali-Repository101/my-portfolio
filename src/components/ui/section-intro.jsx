import { cn } from "@/lib/utils";

/**
 * Editorial section opener: index + label, oversized title, supporting copy.
 * The aside (description / summary) sits in its own column on desktop so the
 * title can run large without the copy competing with it.
 */
export function SectionIntro({ index, eyebrow, title, description, aside, className }) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12", className)}>
      <div className="lg:col-span-8" data-aos="fade-up">
        <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {index && <span className="text-primary">{index}</span>}
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          {eyebrow}
        </p>
        <h2 className="mt-6 text-[clamp(2.6rem,6.2vw,5.75rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-balance text-foreground">
          {title}
        </h2>
      </div>
      {(description || aside) && (
        <div className="lg:col-span-4 lg:pb-3" data-aos="fade-up">
          {description && (
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          )}
          {aside}
        </div>
      )}
    </div>
  );
}
