"use client";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_1fr] md:gap-16">
          <Reveal>
            <span className="flex items-center gap-3 text-sm text-muted">
              <span className="font-display text-2xl text-ink">01</span>
              <span className="h-px w-10 grad-bg" />
              Sobre mim
            </span>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
                Trabalho na ponte entre design, código e resultado real
                para o negócio.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                Hoje cuido de projetos de ponta a ponta: interface, código,
                identidade visual e a parte de marketing digital que
                sustenta o site depois que ele vai ao ar.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Também presto serviço de marketing digital, cuidando de
                redes sociais, anúncios e outras frentes, além de construir
                ferramentas internas para facilitar o dia a dia de quem
                trabalha comigo.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Gosto de projetos onde design, código e estratégia andam
                juntos, porque é aí que o trabalho deixa de ser só uma
                entrega bonita e passa a resolver um problema de verdade.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
