import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pedrotrentin.dev"),
  title: "Pedro Trentin, sites e marketing digital",
  description:
    "Portfólio de Pedro Trentin: sites, marketing digital e sistemas internos sob medida, em Curitiba.",
  openGraph: {
    title: "Pedro Trentin, sites e marketing digital",
    description:
      "Sites institucionais, marketing digital e ferramentas internas, do primeiro rascunho ao domínio no ar.",
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
