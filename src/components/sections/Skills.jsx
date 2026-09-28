import { skillCategories } from "@/lib/skillsData";
import { experience, isCurrent, normalizeTech } from "@/lib/aboutData";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

// Technologies listed for the current role (About → Experience) are highlighted,
// so emphasis comes from real data rather than an arbitrary ranking.
const currentRole = experience.find((job) => isCurrent(job.period));
const currentStack = new Set((currentRole?.stack ?? []).map(normalizeTech));
const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);

const CurrentMarker = () => (
  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
);

const Skills = () => (
  <Section id="skills">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading
        eyebrow="Tech Stack"
        title="My Web Dev Toolkit"
        description="The technologies and tools I use to build modern, high-performance web apps."
      />
      <p className="font-mono text-xs text-muted-foreground lg:pb-2" data-aos="fade-up">
        {totalSkills} technologies · {skillCategories.length} areas
      </p>
    </div>

    <dl className="mt-12 border-t border-border" data-aos="fade-up">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="grid gap-4 border-b border-border py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[14rem_minmax(0,1fr)]"
        >
          <dt className="flex items-center justify-between gap-3 sm:items-start sm:justify-start sm:pt-1.5">
            <span className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <span className="text-muted-foreground" aria-hidden="true">
                {category.icon}
              </span>
              {category.title}
            </span>
            <span className="font-mono text-xs text-muted-foreground sm:hidden">
              {category.skills.length}
              <span className="sr-only"> technologies</span>
            </span>
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const inCurrentRole = currentStack.has(normalizeTech(skill.name));
                return (
                  <li
                    key={skill.name}
                    className={cn(
                      "inline-flex h-8 items-center gap-2 rounded-md border px-3 text-sm",
                      inCurrentRole
                        ? "border-foreground/25 bg-card font-medium text-foreground"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    {inCurrentRole && <CurrentMarker />}
                    {skill.name}
                    {inCurrentRole && <span className="sr-only"> (used in current role)</span>}
                  </li>
                );
              })}
            </ul>
          </dd>
        </div>
      ))}
    </dl>

    {currentStack.size > 0 && (
      <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground" aria-hidden="true">
        <CurrentMarker />
        Used in my current role
      </p>
    )}
  </Section>
);

export default Skills;
