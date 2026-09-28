"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Capability map: one editorial row per category, technologies set as type.
 * "Current role" focus dims everything not listed for the current role —
 * emphasis comes from the experience data, never from an invented ranking.
 */
export default function SkillsMap({ categories, currentKeys, total, currentCount }) {
  const [focusCurrent, setFocusCurrent] = useState(false);
  const current = new Set(currentKeys);

  const modes = [
    { id: false, label: "All", count: total },
    { id: true, label: "Current role", count: currentCount },
  ];

  return (
    <div>
      {/* Focus control */}
      <div className="flex flex-wrap items-center justify-between gap-4" data-aos="fade-up">
        <div
          role="group"
          aria-label="Highlight technologies"
          className="inline-flex rounded-full border border-border bg-card p-1 shadow-lift"
        >
          {modes.map((mode) => (
            <button
              key={mode.label}
              type="button"
              aria-pressed={focusCurrent === mode.id}
              onClick={() => setFocusCurrent(mode.id)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                focusCurrent === mode.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode.label}
              <span className="font-mono text-xs opacity-70">{mode.count}</span>
            </button>
          ))}
        </div>
        <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-primary" />
          Used in my current role
        </p>
      </div>

      {/* Map */}
      <dl className="mt-10 border-t border-border">
        {categories.map((category, i) => (
          <div
            key={category.title}
            className="group/row grid gap-5 border-b border-border py-8 transition-colors duration-300 hover:bg-muted/40 sm:py-10 lg:grid-cols-12 lg:gap-10"
            data-aos="fade-up"
          >
            <dt className="flex items-start justify-between gap-4 lg:col-span-4 lg:flex-col lg:justify-start">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                  {category.title}
                </span>
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground lg:mt-4 lg:pl-9">
                <span className="text-muted-foreground" aria-hidden="true">
                  {category.icon}
                </span>
                {category.skills.length}
                <span className="sr-only"> technologies</span>
              </span>
            </dt>
            <dd className="lg:col-span-8">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 sm:gap-x-9">
                {category.skills.map((skill) => {
                  const inCurrentRole = current.has(skill.key);
                  const dimmed = focusCurrent && !inCurrentRole;
                  return (
                    <li
                      key={skill.name}
                      className={cn(
                        "relative text-xl tracking-[-0.01em] transition-[color,opacity] duration-300 sm:text-2xl",
                        dimmed ? "text-muted-foreground/35" : "text-foreground",
                        !focusCurrent && !inCurrentRole && "text-foreground/75"
                      )}
                    >
                      <span className="hover:text-primary">{skill.name}</span>
                      {inCurrentRole && (
                        <>
                          <span
                            aria-hidden="true"
                            className="absolute -top-0.5 -right-2.5 size-1.5 rounded-full bg-primary"
                          />
                          <span className="sr-only"> (used in current role)</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
