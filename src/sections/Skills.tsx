"use client";

import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_1fr] md:gap-16">
          <Reveal>
            <span className="flex items-center gap-3 text-sm text-muted">
              <span className="font-display text-2xl text-ink">02</span>
              <span className="h-px w-10 grad-bg" />
              Stack
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
                Ferramentas que uso no dia a dia
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {skillGroups.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 0.08}>
                  <div className="rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-muted/40">
                    <h3 className="font-display text-lg text-ink">{group.label}</h3>
                    <StaggerGroup className="mt-5 flex flex-wrap gap-2.5" stagger={0.05}>
                      {group.items.map((item) => (
                        <StaggerItem
                          key={item}
                          variants={staggerItem}
                          className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-ink hover:grad-bg"
                        >
                          {item}
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
