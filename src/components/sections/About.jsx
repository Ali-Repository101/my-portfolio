import { FiArrowRight } from "react-icons/fi";
import { profile, experience, education, isCurrent, periodStart } from "@/lib/aboutData";
import ExperienceEntry from "@/components/about/ExperienceEntry";
import EducationEntry from "@/components/about/EducationEntry";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// "At a glance" is derived from the same data as the timeline below, so it can't drift.
const currentRole = experience.find((job) => isCurrent(job.period)) ?? experience[0];
const latestDegree = education[0];
const facts = [
  currentRole && { term: "Role", value: currentRole.role },
  currentRole && { term: "Company", value: currentRole.organization },
  currentRole && { term: "Since", value: periodStart(currentRole.period) },
  latestDegree && {
    term: "Education",
    // Short form from the degree's own parenthetical, e.g. "(BCA)"
    value: `${latestDegree.degree.match(/\(([^)]+)\)/)?.[1] ?? latestDegree.degree} · ${latestDegree.period}`,
  },
  profile.coreStack?.length && { term: "Core stack", value: profile.coreStack.join(", ") },
].filter(Boolean);

/** Label column + content column on desktop, stacked on mobile (mirrors Skills). */
const CareerGroup = ({ id, title, children, className }) => (
  <section
    aria-labelledby={id}
    className={cn("grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8", className)}
    data-aos="fade-up"
  >
    <h3
      id={id}
      className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground lg:pt-2"
    >
      {title}
    </h3>
    {children}
  </section>
);

const About = () => (
  <Section id="about">
    {/* Profile */}
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
      <div>
        <SectionHeading eyebrow="About" title="My Journey So Far" description={profile.intro} />
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground" data-aos="fade-up">
          {profile.approach}
        </p>
        <a
          href="#projects"
          className={cn(buttonVariants({ variant: "secondary", size: "md" }), "group mt-8")}
          data-aos="fade-up"
        >
          View My Projects
          <FiArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      <Card className="p-6" data-aos="fade-up">
        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          At a glance
        </h3>
        <dl className="mt-4 divide-y divide-border">
          {facts.map(({ term, value }) => (
            <div key={term} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 py-3 first:pt-0 last:pb-0">
              <dt className="text-sm text-muted-foreground">{term}</dt>
              <dd className="text-sm font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>

    {/* Career */}
    <div className="mt-16 space-y-14 border-t border-border pt-14 lg:mt-20 lg:pt-16">
      <CareerGroup id="experience-heading" title="Experience">
        <ol className="space-y-6">
          {experience.map((job) => (
            <li key={`${job.organization}-${job.period}`}>
              <ExperienceEntry {...job} />
            </li>
          ))}
        </ol>
      </CareerGroup>

      <CareerGroup id="education-heading" title="Education">
        <ol className="space-y-8">
          {education.map((entry) => (
            <li key={`${entry.institution}-${entry.period}`} className="lg:px-8">
              <EducationEntry {...entry} />
            </li>
          ))}
        </ol>
      </CareerGroup>
    </div>
  </Section>
);

export default About;
