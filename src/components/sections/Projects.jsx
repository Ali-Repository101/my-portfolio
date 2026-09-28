import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiLock, FiGlobe, FiEyeOff, FiImage, FiBriefcase } from "react-icons/fi";

import { projectsData } from "@/lib/projectsData";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const accessLabels = {
  public: {
    label: "Public project",
    Icon: FiGlobe,
  },
  professional: {
    label: "Professional project",
    Icon: FiBriefcase,
    note: "Professional work — source code is not public.",
  },
  client: {
    label: "Client project",
    Icon: FiLock,
    note: "Client work — live demo and source code are confidential.",
  },
  private: {
    label: "Private project",
    Icon: FiLock,
    note: "Live demo and source code are not publicly available.",
  },
};

// Summary line derived from the data (no invented numbers).
const accessCounts = projectsData.reduce((acc, p) => ({ ...acc, [p.access]: (acc[p.access] ?? 0) + 1 }), {});
const summary = [
  `${projectsData.length} projects`,
  ...["public", "professional", "client", "private"]
    .filter((key) => accessCounts[key])
    .map((key) => `${accessCounts[key]} ${key}`),
].join(" · ");

/** "AIRPHA – Autonomous Drone Technology" → name + descriptor (display only). */
const splitTitle = (title) => {
  const [name, ...rest] = title.split(" – ");
  return { name, descriptor: rest.join(" – ") };
};

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Meta = ({ term, children }) => (
  <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-3">
    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{term}</dt>
    <dd className="text-sm text-foreground">{children}</dd>
  </div>
);

const ProjectMedia = ({ project }) => (
  <div className="relative aspect-[37/20] overflow-hidden border-b border-border bg-muted">
    {project.withholdPreview ? (
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <FiEyeOff className="size-5 text-muted-foreground" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium text-foreground">Preview withheld</p>
        <p className="mt-1 max-w-xs text-xs leading-5 text-muted-foreground">
          Screenshots of this client system contain confidential data.
        </p>
      </div>
    ) : !project.image ? (
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <FiImage className="size-5 text-muted-foreground" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium text-foreground">Screenshots not yet available</p>
      </div>
    ) : (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        className="object-cover object-top"
        sizes="(min-width: 1152px) 532px, (min-width: 768px) calc(50vw - 44px), calc(100vw - 40px)"
      />
    )}
  </div>
);

const ProjectCard = ({ project }) => {
  const access = accessLabels[project.access] ?? accessLabels.private;
  const { name, descriptor } = splitTitle(project.title);
  const titleId = `project-${slug(project.title)}`;
  const hasLinks = Boolean(project.link || project.github);

  return (
    <Card
      as="article"
      interactive
      aria-labelledby={titleId}
      className="flex flex-col overflow-hidden"
      data-aos="fade-up"
    >
      <ProjectMedia project={project} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* 1. Title */}
        <h3 id={titleId} className="text-lg font-semibold tracking-tight text-foreground">
          {name}
          {descriptor && (
            <>
              <span className="sr-only"> – </span>
              <span className="mt-0.5 block text-sm font-normal tracking-normal text-muted-foreground">
                {descriptor}
              </span>
            </>
          )}
        </h3>

        {/* 2. What it is */}
        <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{project.description}</p>

        {/* 2b. Documented contribution (only where the data provides it) */}
        {project.highlights?.length > 0 && (
          <div className="mt-5">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              My contribution
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 3. Type · access · stack */}
        <dl className="mt-5 space-y-3 border-t border-border pt-5">
          <Meta term="Type">{project.type}</Meta>
          <Meta term="Access">
            <span className="inline-flex items-center gap-1.5">
              <access.Icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
              {access.label}
            </span>
          </Meta>
          <Meta term="Stack">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Meta>
        </dl>

        {/* 4. What the visitor can open — real public links only */}
        <div className="mt-auto pt-6">
          {hasLinks ? (
            <div className="flex flex-wrap gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "secondary", size: "sm" })}
                >
                  {project.linkLabel ?? "Live Demo"}
                  <FiArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">of {project.title} (opens in a new tab)</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "secondary", size: "sm" })}
                >
                  <FaGithub className="size-4" aria-hidden="true" />
                  Source Code
                  <span className="sr-only">of {project.title} (opens in a new tab)</span>
                </a>
              )}
            </div>
          ) : (
            access.note && (
              <p className="flex items-start gap-2 rounded-md bg-muted px-3 py-2.5 text-sm leading-6 text-muted-foreground">
                <FiLock className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
                {access.note}
              </p>
            )
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => (
  <Section id="projects" className="bg-subtle">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading
        eyebrow="Project Portfolio"
        title="My Creative Work"
        description="A collection of my most innovative projects that showcase modern design and clean code."
      />
      <p className="font-mono text-xs text-muted-foreground lg:shrink-0 lg:pb-2 lg:whitespace-nowrap" data-aos="fade-up">
        {summary}
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </Section>
);

export default Projects;
