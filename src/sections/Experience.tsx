"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="trajetoria" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_1fr] md:gap-16">
          <Reveal>
            <span className="flex items-center gap-3 text-sm text-muted">
              <span className="font-display text-2xl text-ink">05</span>
              <span className="h-px w-10 grad-bg" />
              Trajetória
            </span>
          </Reveal>

          <div className="relative max-w-2xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top" }}
                className="h-full w-full grad-bg"
              />
            </div>

            <ol className="flex flex-col gap-14">
              {experience.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <li className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg grad-bg" />
                    <span className="text-xs uppercase tracking-widest text-muted">
                      {item.date}
                    </span>
                    <h3 className="font-display mt-2 text-xl text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
