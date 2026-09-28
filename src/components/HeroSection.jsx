import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { socialLinks, roles } from "@/lib/hero";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => (
  <section
    id="home"
    className="flex items-center pt-28 pb-20 sm:pt-36 sm:pb-24 lg:min-h-[min(100svh,60rem)] lg:pt-32 lg:pb-24"
  >
    <Container>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_23rem]">
        {/* Portrait — compact avatar on mobile, framed portrait from md up */}
        <figure className="relative w-20 md:order-last md:w-full">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted md:aspect-[4/5] md:rounded-2xl">
            <Image
              src="/images/arshad.jpg"
              alt="Portrait of Arshad Ali"
              fill
              sizes="(min-width: 1280px) 368px, (min-width: 1024px) 336px, (min-width: 768px) 240px, 80px"
              className="object-cover object-[50%_35%]"
              priority
            />
          </div>
          <figcaption className="absolute bottom-3 left-3 hidden whitespace-nowrap rounded-md border border-border bg-background/95 px-3 py-1.5 text-sm md:block">
            <span className="font-semibold text-foreground">3.8+</span>{" "}
            <span className="text-muted-foreground">Years Experience</span>
          </figcaption>
        </figure>

        {/* Text */}
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted-foreground">Hello, I&apos;m</p>

          <h1 className="mt-3 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            Arshad Ali
          </h1>

          <p className="mt-4 text-xl font-medium tracking-tight text-primary sm:text-2xl">
            {roles[0]}
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A passionate Full Stack Developer with 3.8+ years of experience
            building scalable, modern web applications.
          </p>

          <div className="mt-9 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
              >
                Contact Me
                <FiArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#projects" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                View Projects
              </a>
            </div>

            <span aria-hidden="true" className="hidden h-6 w-px bg-border lg:block" />

            {/* Social Links */}
            <ul className="-ml-2.5 flex items-center gap-0.5 lg:ml-0" aria-label="Social profiles">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={buttonVariants({ variant: "ghost", size: "icon" })}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroSection;
