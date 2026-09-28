import { Card } from "@/components/ui/card";
import { isCurrent } from "@/lib/aboutData";

const Bullet = ({ children }) => (
  <li className="flex gap-3 text-[15px] leading-7 text-muted-foreground">
    <span aria-hidden="true" className="mt-[13px] h-px w-3 shrink-0 bg-foreground/40" />
    <span>{children}</span>
  </li>
);

/** Professional role: role/company → dates → responsibilities (flat or grouped by project) → stack. */
const ExperienceEntry = ({ role, organization, period, responsibilities = [], projects = [], stack = [] }) => (
  <Card as="article" className="p-6 sm:p-8">
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div>
        <h4 className="text-xl font-semibold tracking-tight text-foreground">{role}</h4>
        <p className="mt-1 text-base text-muted-foreground">{organization}</p>
      </div>
      <p className="flex shrink-0 items-center gap-2.5 font-mono text-sm text-muted-foreground sm:pt-1">
        {period}
        {isCurrent(period) && (
          <span className="rounded border border-border px-1.5 py-px text-[11px] font-medium uppercase tracking-wider text-foreground">
            Current
          </span>
        )}
      </p>
    </header>

    {responsibilities.length > 0 && (
      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {responsibilities.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>
    )}

    {projects.length > 0 && (
      <div className="mt-6 space-y-6 border-t border-border pt-6">
        {projects.map((project) => (
          <div key={project.title}>
            <h5 className="text-sm font-semibold text-foreground">{project.title}</h5>
            <ul className="mt-3 space-y-3">
              {project.items.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}

    {stack.length > 0 && (
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <h5 className="mr-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Stack</h5>
        <ul className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    )}
  </Card>
);

export default ExperienceEntry;
