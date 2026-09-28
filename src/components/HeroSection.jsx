import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { socialLinks, roles } from "@/lib/hero";
import { profile, experience, isCurrent } from "@/lib/aboutData";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import HeroPortrait from "@/components/hero/HeroPortrait";
import { cn } from "@/lib/utils";

const currentRole = experience.find((job) => isCurrent(job.period));
const previousRole = experience.find((job) => !isCurrent(job.period));

// Engineering "spec sheet" under the hero — every value comes from existing data.
const spec = [
  { term: "Role", value: roles[0] },
  { term: "Core stack", value: profile.coreStack.join(" · ") },
  { term: "Domains", value: profile.domains.join(" · ") },
  previousRole && { term: "Previously", value: previousRole.organization },
].filter(Boolean);

const rise = (ms) => ({ animationDelay: `${ms}ms` });

const HeroSection = () => (
  // `dark` re-scopes tokens: the hero is a dark stage in both themes.
  <section id="home" className="dark relative isolate overflow-hidden bg-[#050507] text-foreground">
    {/* Lighting + texture (decorative) */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="animate-glow-in absolute -top-[18rem] right-[-12rem] size-[56rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.26),rgba(59,130,246,0.06)_55%,transparent)]" />
      <div className="absolute -bottom-[22rem] -left-[16rem] size-[48rem] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.10),transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="bg-noise absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#050507]" />
    </div>

    <Container className="relative flex min-h-[100svh] flex-col pt-28 pb-10 sm:pt-32 lg:pt-36 lg:pb-12">
      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-7">
          <p className="animate-rise flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400" style={rise(0)}>
            <span aria-hidden="true" className="h-px w-10 bg-primary/70" />
            Hello, I&apos;m
          </p>

          <h1 className="mt-6 text-[clamp(5rem,23vw,8.5rem)] leading-[0.82] font-semibold tracking-[-0.06em] lg:text-[clamp(7.5rem,12.5vw,11.5rem)]">
            <span className="animate-rise block bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent" style={rise(80)}>
              Arshad
            </span>{" "}
            <span className="animate-rise block bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent lg:pl-[0.55em]" style={rise(170)}>
              Ali
            </span>
          </h1>

          <div className="animate-rise mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2" style={rise(280)}>
            <p className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">{roles[0]}</p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              {profile.coreStack.join(" · ")}
            </p>
          </div>

          <p className="animate-rise mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8" style={rise(360)}>
            A passionate Full Stack Developer with {profile.experienceYears} years of experience
            building scalable, modern web applications.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-6 sm:flex-row sm:items-center" style={rise(440)}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "group h-12 rounded-full px-6 text-[15px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_40px_-10px_rgba(96,165,250,0.55)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_16px_50px_-10px_rgba(96,165,250,0.75)]"
                )}
              >
                Contact Me
                <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "group h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-[15px] backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.07]"
                )}
              >
                View Projects
                <FiArrowDown className="size-4 text-zinc-400 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            <ul className="-ml-2.5 flex items-center gap-0.5 sm:ml-0" aria-label="Social profiles">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full text-zinc-400 hover:bg-white/[0.06] hover:text-white")}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <HeroPortrait years={profile.experienceYears} company={currentRole?.organization} />
        </div>
      </div>

      {/* Spec sheet */}
      <dl
        className="animate-rise mt-20 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 lg:mt-16 lg:grid-cols-4"
        style={rise(560)}
      >
        {spec.map(({ term, value }) => (
          <div key={term}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{term}</dt>
            <dd className="mt-2 text-sm font-medium text-zinc-200">{value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
);

export default HeroSection;
