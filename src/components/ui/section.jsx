import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const tones = {
  default: "bg-background",
  subtle: "bg-subtle",
  // Re-scopes the design tokens to their dark values for this subtree only,
  // so a section can be a dark "stage" in both light and dark themes.
  dark: "dark bg-background text-foreground",
};

/** A page section: consistent vertical rhythm, tone, contained content. */
export function Section({ id, tone = "default", className, containerClassName, children, ...props }) {
  return (
    <section
      id={id}
      className={cn("relative isolate py-24 sm:py-28 lg:py-36", tones[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
