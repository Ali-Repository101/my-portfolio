import { socialLinks } from "@/lib/footer";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const Footer = () => (
  <footer className="border-t border-border">
    <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <p className="text-sm text-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </p>
        <p className="text-xs text-muted-foreground">
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
              className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </footer>
);

export default Footer;
