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
                Comecei construindo sites por conta própria, sem que o
                cliente pedisse, só para mostrar prontos. Foi assim com a
                Trato Fino e a Park Pet: duas pet creches que ganharam um
                site completo antes mesmo de eu apresentar a ideia. A
                resposta foi boa o suficiente para virar um jeito de
                trabalhar.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Hoje cuido de projetos de ponta a ponta: interface, código,
                identidade visual e a parte de marketing digital que
                sustenta o site depois que ele vai ao ar. A Laguna House foi
                meu primeiro contrato pago, com domínio próprio e indexação
                no Google. Também presto serviço de marketing digital para
                casas de repouso, cuidando de redes sociais, anúncios e
                WordPress.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Gosto de projetos onde front-end, direção de conteúdo e
                estratégia digital andam juntos, porque é aí que um site
                deixa de ser só uma página bonita e passa a gerar
                resultado.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
