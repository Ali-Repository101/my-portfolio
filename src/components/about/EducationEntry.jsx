/** Academic entry — a quiet closing row beneath the experience timeline. */
const EducationEntry = ({ degree, institution, period, coursework = [] }) => (
  <article className="grid gap-4 lg:grid-cols-12 lg:gap-12">
    <header className="lg:col-span-4">
      <p className="font-mono text-sm text-muted-foreground">{period}</p>
      <h4 className="mt-3 text-xl leading-snug font-semibold tracking-tight text-foreground/80">{degree}</h4>
      <p className="mt-1.5 text-sm text-muted-foreground">{institution}</p>
    </header>
    {coursework.length > 0 && (
      <div className="lg:col-span-8 lg:pt-8">
        <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Coursework</h5>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-foreground/75">
          {coursework.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </div>
    )}
  </article>
);

export default EducationEntry;
