"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projetos" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex items-center gap-3 text-sm text-muted">
          <span className="font-display text-2xl text-ink">03</span>
          <span className="h-px w-10 grad-bg" />
          Projetos em destaque
        </div>

        <div className="flex flex-col gap-28 md:gap-36">
          {featuredProjects.map((project, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={project.slug}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="max-w-lg">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                      <span>{project.categoryLabel}</span>
                      <span className="h-1 w-1 rounded-full bg-muted" />
                      <span>{project.year}</span>
                      <span className="h-1 w-1 rounded-full bg-muted" />
                      <span
                        className={
                          project.status === "No ar" ? "grad-text font-medium" : ""
                        }
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-base text-muted">{project.subtitle}</p>

                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
                      >
                        <span className="relative">
                          Visitar site
                          <span className="absolute -bottom-1 left-0 h-px w-full grad-bg origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
