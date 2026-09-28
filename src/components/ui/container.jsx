import { cn } from "@/lib/utils";

/** The one page-width container: max width + horizontal gutters. */
export function Container({ className, ...props }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />;
}
