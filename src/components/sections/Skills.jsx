import { skillCategories } from "@/lib/skillsData";
import { experience, isCurrent, normalizeTech } from "@/lib/aboutData";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";
import SkillsMap from "@/components/skills/SkillsMap";

// Technologies listed for the current role (About → Experience) are highlighted,
// so emphasis comes from real data rather than an arbitrary ranking.
const currentRole = experience.find((job) => isCurrent(job.period));
const currentStack = new Set((currentRole?.stack ?? []).map(normalizeTech));

// Serializable props for the client map (icons are pre-rendered elements).
const categories = skillCategories.map((category) => ({
  title: category.title,
  icon: category.icon,
  skills: category.skills.map((skill) => ({ name: skill.name, key: normalizeTech(skill.name) })),
}));
const allKeys = categories.flatMap((c) => c.skills.map((s) => s.key));
const currentKeys = allKeys.filter((key) => currentStack.has(key));

const Skills = () => (
  <Section id="skills">
    <SectionIntro
      index="01"
      eyebrow="Tech Stack"
      title="My Web Dev Toolkit"
      description="The technologies and tools I use to build modern, high-performance web apps."
      aside={
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          {allKeys.length} technologies · {categories.length} areas
        </p>
      }
    />

    <div className="mt-16 lg:mt-20">
      <SkillsMap
        categories={categories}
        currentKeys={currentKeys}
        total={allKeys.length}
        currentCount={currentKeys.length}
      />
    </div>
  </Section>
);

export default Skills;
