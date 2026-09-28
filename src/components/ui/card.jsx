import { cn } from "@/lib/utils";

/** Bordered surface. `interactive` adds a quiet border hover (no lift, no glow). */
export function Card({ as: Component = "div", interactive = false, className, ...props }) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground",
        interactive && "transition-colors duration-200 hover:border-foreground/20",
        className
      )}
      {...props}
    />
  );
}
