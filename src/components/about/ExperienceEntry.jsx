import { isCurrent, periodStart } from "@/lib/aboutData";
import { cn } from "@/lib/utils";

const StackList = ({ stack, className }) => (
  <div className={className}>
    <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Stack</h5>
    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-foreground/80">
      {stack.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  </div>
);

const Bullet = ({ children, className }) => (
  <li className={cn("flex gap-3 text-[15px] leading-7 text-muted-foreground", className)}>
    <span aria-hidden="true" className="mt-[13px] h-px w-3 shrink-0 bg-foreground/35" />
    <span>{children}</span>
  </li>
);

/** Current role: dominant. Sticky identity column + railed project timeline. */
const CurrentEntry = ({ role, organization, period, projects = [], responsibilities = [], stack = [] }) => {
  const end = period.slice(periodStart(period).length).replace(/^\s*[–-]\s*/, "");
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <header className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-foreground shadow-lift">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          Current
        </p>
        <p className="mt-6 font-mono text-sm text-muted-foreground">
          <span className="block text-4xl font-sans font-semibold tracking-[-0.04em] text-foreground">{periodStart(period)}</span>
          <span className="mt-1 block">– {end}</span>
        </p>
        <h4 className="mt-8 text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">{role}</h4>
        <p className="mt-3 text-lg text-muted-foreground">{organization}</p>
        {stack.length > 0 && <StackList stack={stack} className="mt-8 border-t border-border pt-6" />}
      </header>

      <div className="lg:col-span-8">
        {responsibilities.length > 0 && (
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </ul>
        )}
        {projects.length > 0 && (
          <ol className="relative space-y-4 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-border">
            {projects.map((project, i) => (
              <li key={project.title} className="relative pl-7 sm:pl-10">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-7 left-0 size-[15px] rounded-full border-2 bg-background",
                    i === 0 ? "border-primary" : "border-border"
                  )}
                />
                <div className="rounded-2xl border border-transparent p-6 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card hover:shadow-lift max-sm:px-0 max-sm:hover:border-transparent max-sm:hover:bg-transparent max-sm:hover:shadow-none sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h5 className="mt-2 text-lg leading-snug font-semibold tracking-tight text-foreground">{project.title}</h5>
                  <ul className="mt-4 space-y-3">
                    {project.items.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </article>
  );
};

/** Previous role: deliberately recessive — no surface, smaller type, muted. */
const PastEntry = ({ role, organization, period, responsibilities = [], projects = [], stack = [] }) => (
  <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
    <header className="lg:col-span-4">
      <p className="font-mono text-sm text-muted-foreground">{period}</p>
      <h4 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground/80">{role}</h4>
      <p className="mt-1.5 text-base text-muted-foreground">{organization}</p>
    </header>
    <div className="lg:col-span-8">
      <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
        {responsibilities.map((item) => (
          <Bullet key={item} className="text-sm leading-6">
            {item}
          </Bullet>
        ))}
        {projects.flatMap((p) => p.items).map((item) => (
          <Bullet key={item} className="text-sm leading-6">
            {item}
          </Bullet>
        ))}
      </ul>
      {stack.length > 0 && <StackList stack={stack} className="mt-6" />}
    </div>
  </article>
);

const ExperienceEntry = (props) => (isCurrent(props.period) ? <CurrentEntry {...props} /> : <PastEntry {...props} />);

export default ExperienceEntry;
