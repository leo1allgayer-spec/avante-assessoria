import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assessoria de Marketing 360° | Avante Digital",
  description: "Estratégia, implementação e acompanhamento para estruturar o marketing e as vendas da sua empresa.",
  icons: {
    icon: [{ url: "/favicon-avante.jpeg", type: "image/jpeg" }],
    shortcut: "/favicon-avante.jpeg",
    apple: "/favicon-avante.jpeg",
  },
  openGraph: {
    title: "Assessoria de Marketing 360° | Avante Digital",
    description: "Marketing com estratégia. Operação que avança.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-avante-v2.png", width: 1200, height: 630, alt: "Assessoria de Marketing 360° Avante Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assessoria de Marketing 360° | Avante Digital",
    description: "Marketing com estratégia. Operação que avança.",
    images: ["/og-avante-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
