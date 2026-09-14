"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

type FilterKey = "all" | ProjectCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "casas-de-repouso", label: categoryLabels["casas-de-repouso"] },
  { key: "pet-creches", label: categoryLabels["pet-creches"] },
  { key: "ferramentas-internas", label: categoryLabels["ferramentas-internas"] },
];

export function AllProjects() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="flex items-center gap-3 text-sm text-muted">
              <span className="font-display text-2xl text-ink">04</span>
              <span className="h-px w-10 grad-bg" />
              Todos os projetos
            </span>
            <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
              Todo o trabalho, lado a lado
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs uppercase tracking-wide transition-all duration-300",
                  active === f.key
                    ? "border-transparent grad-bg text-white"
                    : "border-line text-muted hover:text-ink"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{project.categoryLabel}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display mt-2 text-xl text-ink">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink"
                      >
                        Visitar
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="mt-4 inline-block text-sm text-muted">
                        {project.status}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
