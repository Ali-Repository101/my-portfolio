import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiLock, FiGlobe, FiEyeOff, FiImage, FiBriefcase } from "react-icons/fi";

import { projectsData } from "@/lib/projectsData";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";
import { buttonVariants } from "@/components/ui/button";
import DepthFrame from "@/components/projects/DepthFrame";
import { cn } from "@/lib/utils";

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

// Recent professional work is presented as case studies; everything else as an archive index.
const featured = projectsData.filter((p) => p.access === "professional" && p.image && !p.withholdPreview);
const archive = projectsData.filter((p) => !featured.includes(p));
const archiveKinds = [...new Set(archive.map((p) => p.access))].join(", ");

/** "AIRPHA – Autonomous Drone Technology" → name + descriptor (display only). */
const splitTitle = (title) => {
  const [name, ...rest] = title.split(" – ");
  return { name, descriptor: rest.join(" – ") };
};

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const pad = (n) => String(n).padStart(2, "0");
const hostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

const AccessBadge = ({ access }) => (
  <span className="inline-flex items-center gap-1.5">
    <access.Icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
    {access.label}
  </span>
);

const ProjectActions = ({ project, access, size = "md" }) => {
  if (!project.link && !project.github) {
    return access.note ? (
      <p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
        <FiLock className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
        {access.note}
      </p>
    ) : null;
  }
  return (
    <div className="flex flex-wrap gap-3">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "primary", size }),
            "group/btn rounded-full px-5 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(96,165,250,0.7)]"
          )}
        >
          {project.linkLabel ?? "Live Demo"}
          <FiArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "secondary", size }), "rounded-full border-white/15 bg-white/[0.03] px-5 hover:border-white/30 hover:bg-white/[0.07]")}
        >
          <FaGithub className="size-4" aria-hidden="true" />
          Source Code
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Featured case study                                                 */
/* ------------------------------------------------------------------ */
const Eyebrow = ({ index, type }) => (
  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
    <span className="text-primary">{pad(index + 1)}</span>
    <span aria-hidden="true" className="h-px w-6 bg-border" />
    {type}
  </p>
);

const ProjectTitle = ({ id, name, descriptor, large }) => (
  <h3
    id={id}
    className={cn(
      "mt-5 leading-[0.92] font-semibold tracking-[-0.05em] text-foreground",
      large ? "text-6xl sm:text-7xl lg:text-8xl" : "text-5xl sm:text-6xl"
    )}
  >
    {name}
    {descriptor && (
      <>
        <span className="sr-only"> – </span>
        <span className="mt-4 block text-lg leading-snug font-normal tracking-[-0.01em] text-zinc-400">{descriptor}</span>
      </>
    )}
  </h3>
);

const Contribution = ({ items }) =>
  items?.length > 0 ? (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">My contribution</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
            <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-primary/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

const Meta = ({ project, access }) => (
  <dl className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-x-8">
    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-0.5">Type</dt>
    <dd className="-mt-2 text-sm text-foreground sm:mt-0">{project.type}</dd>
    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-0.5">Access</dt>
    <dd className="-mt-2 text-sm text-foreground sm:mt-0">
      <AccessBadge access={access} />
    </dd>
    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-0.5">Stack</dt>
    <dd className="-mt-2 sm:mt-0">
      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-zinc-300">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </dd>
  </dl>
);

const Shot = ({ project, name, side, sizes }) => (
  <DepthFrame side={side} label={hostname(project.link) ?? name}>
    <Image
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      fill
      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.03]"
      sizes={sizes}
    />
  </DepthFrame>
);

/** Oversized index — typographic depth sitting behind the product shot. */
const GhostIndex = ({ index, className }) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute -z-10 hidden text-[13rem] leading-none font-semibold tracking-[-0.07em] text-white/[0.04] select-none lg:block",
      className
    )}
  >
    {pad(index + 1)}
  </span>
);

const FeaturedProject = ({ project, index }) => {
  const access = accessLabels[project.access] ?? accessLabels.private;
  const { name, descriptor } = splitTitle(project.title);
  const titleId = `project-${slug(project.title)}`;

  // Lead case study: full-bleed product stage, story in three columns beneath.
  if (index === 0) {
    return (
      <article aria-labelledby={titleId} className="group relative">
        <div className="relative lg:-mx-10 xl:-mx-20" data-aos="fade-up">
          <GhostIndex index={index} className="-top-40 -left-4" />
          <Shot project={project} name={name} side="center" sizes="(min-width: 1280px) 1240px, 100vw" />
        </div>
        <div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16" data-aos="fade-up">
          <div className="lg:col-span-5">
            <Eyebrow index={index} type={project.type} />
            <ProjectTitle id={titleId} name={name} descriptor={descriptor} large />
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">{project.description}</p>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <Contribution items={project.highlights} />
          </div>
          <div className="space-y-8 lg:col-span-3 lg:pt-10">
            <Meta project={project} access={access} />
            <ProjectActions project={project} access={access} />
          </div>
        </div>
      </article>
    );
  }

  // Alternating split layout; the shot escapes the column toward the viewport edge.
  const mediaRight = index % 2 === 0;
  return (
    <article aria-labelledby={titleId} className="group relative grid items-center gap-20 lg:grid-cols-12 lg:gap-16">
      <div
        className={cn("relative lg:col-span-7", mediaRight ? "lg:order-2 lg:-mr-12 xl:-mr-24" : "lg:-ml-12 xl:-ml-24")}
        data-aos="fade-up"
      >
        <GhostIndex index={index} className={cn("-top-36", mediaRight ? "-right-2" : "-left-2")} />
        <Shot project={project} name={name} side={mediaRight ? "right" : "left"} sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw" />
      </div>

      <div className={cn("relative lg:col-span-5", mediaRight && "lg:order-1")} data-aos="fade-up">
        <Eyebrow index={index} type={project.type} />
        <ProjectTitle id={titleId} name={name} descriptor={descriptor} />
        <p className="mt-6 text-base leading-7 text-muted-foreground">{project.description}</p>
        {project.highlights?.length > 0 && (
          <div className="mt-8">
            <Contribution items={project.highlights} />
          </div>
        )}
        <div className="mt-8 border-t border-white/10 pt-6">
          <Meta project={project} access={access} />
        </div>
        <div className="mt-8">
          <ProjectActions project={project} access={access} />
        </div>
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Archive row                                                         */
/* ------------------------------------------------------------------ */
const ArchiveThumb = ({ project }) => (
  <div className="relative aspect-[37/20] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-depth transition-transform duration-500 group-hover:-translate-y-1">
    {project.withholdPreview ? (
      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
        <FiEyeOff className="size-4 text-muted-foreground" aria-hidden="true" />
        <p className="mt-2 text-xs font-medium text-foreground">Preview withheld</p>
        <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
          Screenshots of this client system contain confidential data.
        </p>
      </div>
    ) : !project.image ? (
      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
        <FiImage className="size-4 text-muted-foreground" aria-hidden="true" />
        <p className="mt-2 text-xs font-medium text-foreground">Screenshots not yet available</p>
      </div>
    ) : (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        className="object-cover object-top opacity-80 transition-[opacity,transform] duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        sizes="(min-width: 1024px) 280px, 100vw"
      />
    )}
  </div>
);

const ArchiveRow = ({ project, index }) => {
  const access = accessLabels[project.access] ?? accessLabels.private;
  const { name, descriptor } = splitTitle(project.title);
  const titleId = `project-${slug(project.title)}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative grid gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] lg:grid-cols-12 lg:gap-10 lg:py-12"
      data-aos="fade-up"
    >
      <p className="font-mono text-xs text-muted-foreground lg:col-span-1 lg:pt-2">{pad(index)}</p>

      <div className="lg:col-span-4">
        <h4 id={titleId} className="text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground">
          {name}
          {descriptor && (
            <>
              <span className="sr-only"> – </span>
              <span className="mt-1 block text-base font-normal tracking-normal text-zinc-400">{descriptor}</span>
            </>
          )}
        </h4>
        <dl className="mt-5 space-y-2 text-sm">
          <div className="flex gap-3">
            <dt className="w-14 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Type</dt>
            <dd className="text-foreground">{project.type}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-14 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Access</dt>
            <dd className="text-foreground">
              <AccessBadge access={access} />
            </dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-4">
        <p className="text-[15px] leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-5">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Stack</h5>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-zinc-300">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <ProjectActions project={project} access={access} size="sm" />
        </div>
      </div>

      <div className="lg:col-span-3">
        <ArchiveThumb project={project} />
      </div>
    </article>
  );
};

const Projects = () => (
  <Section id="projects" tone="dark" className="overflow-hidden bg-[#050507]">
    {/* Stage lighting (decorative) */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute top-0 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,130,246,0.13),transparent)]" />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>

    <SectionIntro
      index="03"
      eyebrow="Project Portfolio"
      title="My Creative Work"
      description="A collection of my most innovative projects that showcase modern design and clean code."
      aside={<p className="mt-6 font-mono text-xs text-muted-foreground">{summary}</p>}
    />

    {/* Case studies */}
    <div className="mt-24 space-y-32 lg:mt-32 lg:space-y-44">
      {featured.map((project, i) => (
        <FeaturedProject key={project.title} project={project} index={i} />
      ))}
    </div>

    {/* Archive */}
    <div className="mt-32 lg:mt-44">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6" data-aos="fade-up">
        <h3 className="text-[clamp(2rem,4vw,3.25rem)] leading-none font-semibold tracking-[-0.04em] text-foreground">
          More work
        </h3>
        <p className="font-mono text-xs text-muted-foreground">
          {archive.length} projects · {archiveKinds}
        </p>
      </div>
      {archive.map((project, i) => (
        <ArchiveRow key={project.title} project={project} index={featured.length + i + 1} />
      ))}
    </div>
  </Section>
);

export default Projects;
