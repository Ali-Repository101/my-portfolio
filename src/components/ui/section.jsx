import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

/** A page section: consistent vertical rhythm, hairline separator, contained content. */
export function Section({ id, className, containerClassName, children, ...props }) {
  return (
    <section
      id={id}
      className={cn("border-t border-border py-20 sm:py-24 lg:py-28", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
