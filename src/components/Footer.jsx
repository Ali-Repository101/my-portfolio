import { socialLinks } from "@/lib/footer";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => (
  // Continues the dark closing stage in both themes.
  <footer className="dark relative isolate overflow-hidden bg-[#050507] text-foreground">
    <Container className="relative">
      <div className="flex flex-col gap-6 border-t border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            Built with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </div>

        <ul className="-ml-2.5 flex items-center gap-1 sm:ml-0 sm:-mr-2.5" aria-label="Social profiles">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "rounded-full hover:bg-white/[0.06]")}
              >
                <Icon className="size-[18px]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>

    {/* Oversized wordmark — the page's final typographic beat (decorative) */}
    <p
      aria-hidden="true"
      className="pointer-events-none -mb-[0.2em] text-center text-[clamp(4rem,19vw,19rem)] leading-[0.8] font-semibold tracking-[-0.07em] whitespace-nowrap select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-transparent"
    >
      {siteConfig.name}
    </p>
  </footer>
);

export default Footer;
