import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pedrotrentin.dev"),
  title: "Pedro Trentin — Desenvolvedor Front-end",
  description:
    "Portfólio de Pedro Trentin, desenvolvedor front-end e profissional de marketing digital em Curitiba. Sites e ferramentas para casas de repouso e pet creches.",
  openGraph: {
    title: "Pedro Trentin — Desenvolvedor Front-end",
    description:
      "Sites institucionais e ferramentas internas para casas de repouso e pet creches, do primeiro rascunho ao domínio no ar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
