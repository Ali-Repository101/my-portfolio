import { FiArrowRight } from "react-icons/fi";
import { profile, experience, education, isCurrent } from "@/lib/aboutData";
import ExperienceEntry from "@/components/about/ExperienceEntry";
import EducationEntry from "@/components/about/EducationEntry";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Facts band — derived from the same data as the timeline below, so it can't drift.
const currentRole = experience.find((job) => isCurrent(job.period)) ?? experience[0];
const latestDegree = education[0];
const degreeShort = latestDegree?.degree.match(/\(([^)]+)\)/)?.[1] ?? latestDegree?.degree;
const facts = [
  { value: profile.experienceYears, label: "Years building and shipping production web & mobile apps" },
  {
    value: String(experience.length),
    label: `Companies — ${experience.map((job) => job.organization.split(",")[0]).join(" and ")}`,
  },
  latestDegree && { value: degreeShort, label: `${latestDegree.degree}, ${latestDegree.period}` },
].filter(Boolean);

// "Passionate about … — always exploring …" → emphasised lead + receding tail.
const [statementLead, statementTail] = profile.approach.split(" — ");

const CareerGroup = ({ id, title, children, className }) => (
  <section aria-labelledby={id} className={className} data-aos="fade-up">
    <h3
      id={id}
      className="mb-10 flex items-center gap-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
    >
      {title}
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </h3>
    {children}
  </section>
);

const About = () => (
  <Section id="about" tone="subtle" className="overflow-hidden">
    {/* Ambient light on the light stage (decorative) */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(60%_60%_at_80%_0%,color-mix(in_oklab,var(--primary)_9%,transparent),transparent)]"
    />

    <SectionIntro index="02" eyebrow="About" title="My Journey So Far" description={profile.intro} />

    {/* Editorial statement */}
    <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12" data-aos="fade-up">
      <p className="text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.12] font-medium tracking-[-0.03em] text-balance text-foreground lg:col-span-12 xl:col-span-10">
        {statementLead}
        {statementTail && <span className="text-muted-foreground"> — {statementTail}</span>}
      </p>
      <div className="lg:col-span-12 xl:col-span-2 xl:flex xl:items-end xl:justify-end">
        <a href="#projects" className={cn(buttonVariants({ variant: "secondary", size: "md" }), "group rounded-full")}>
          View My Projects
          <FiArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </div>

    {/* Facts band */}
    <dl className="mt-16 grid border-y border-border sm:grid-cols-3" data-aos="fade-up">
      {facts.map(({ value, label }, i) => (
        <div
          key={label}
          className={cn("py-8 sm:px-8 sm:py-10", i > 0 && "border-t border-border sm:border-t-0 sm:border-l", i === 0 && "sm:pl-0")}
        >
          <dt className="sr-only">{label}</dt>
          <dd>
            <span className="block text-[clamp(2.75rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.05em] text-foreground">
              {value}
            </span>
            <span aria-hidden="true" className="mt-4 block max-w-[16rem] text-sm leading-6 text-muted-foreground">
              {label}
            </span>
          </dd>
        </div>
      ))}
    </dl>

    {/* Career */}
    <div className="mt-24 space-y-24 lg:mt-32">
      <CareerGroup id="experience-heading" title="Experience">
        <ol className="space-y-20">
          {experience.map((job) => (
            <li key={`${job.organization}-${job.period}`} className={cn(!isCurrent(job.period) && "border-t border-border pt-12")}>
              <ExperienceEntry {...job} />
            </li>
          ))}
        </ol>
      </CareerGroup>

      <CareerGroup id="education-heading" title="Education">
        <ol className="space-y-10">
          {education.map((entry) => (
            <li key={`${entry.institution}-${entry.period}`}>
              <EducationEntry {...entry} />
            </li>
          ))}
        </ol>
      </CareerGroup>
    </div>
  </Section>
);

export default About;
