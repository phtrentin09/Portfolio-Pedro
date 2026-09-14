"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-x-hidden pt-28 pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--red-light)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[480px] w-[480px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--blue-light)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3 text-sm text-muted"
          >
            <span className="h-px w-8 grad-bg" />
            Sites, marketing digital e sistemas internos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Pedro Trentin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Construo sites e ferramentas digitais para negócios reais, do
            primeiro rascunho ao domínio no ar. Marketing digital, identidade
            visual e sistemas internos sob medida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full grad-bg px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Ver projetos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-muted"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-surface">
            <div className="absolute inset-0 grad-bg opacity-20" />
            <Image
              src="/images/avatar.jpg"
              alt="Pedro Trentin"
              fill
              priority
              sizes="(max-width: 768px) 280px, 340px"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2.4rem] opacity-40 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, var(--red-light), var(--blue-light))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
