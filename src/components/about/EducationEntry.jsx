/** Academic entry — deliberately lighter than ExperienceEntry (no card, compact coursework). */
const EducationEntry = ({ degree, institution, period, coursework = [] }) => (
  <article>
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div>
        <h4 className="text-lg font-semibold tracking-tight text-foreground">{degree}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{institution}</p>
      </div>
      <p className="shrink-0 font-mono text-sm text-muted-foreground sm:pt-1">{period}</p>
    </header>

    {coursework.length > 0 && (
      <div className="mt-4">
        <h5 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Coursework</h5>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground">
          {coursework.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </div>
    )}
  </article>
);

export default EducationEntry;
