"use client";

import { Reveal } from "@/components/Reveal";

const email = "phtrentinmedrado@gmail.com";

export function Contact() {
  return (
    <section id="contato" className="relative w-full overflow-x-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-15 blur-[140px]"
        style={{
          background: "linear-gradient(135deg, var(--red-light), var(--blue-light))",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="flex items-center justify-center gap-3 text-sm text-muted">
            <span className="font-display text-2xl text-ink">06</span>
            <span className="h-px w-10 grad-bg" />
            Contato
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Vamos construir o próximo projeto juntos
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Tenho espaço para novos projetos de site institucional,
            ferramentas internas ou marketing digital. Me chama.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 rounded-full grad-bg px-9 py-4 text-base font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              {email}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
