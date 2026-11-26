import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Montserrat for headings, Inter for body text, JetBrains Mono for small labels
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "800", "900"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: { default: dict.meta.title, template: "%s — Tijme Vervoort" },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang === "no" ? "nb" : lang}
      // Scale the whole site up on large screens (everything is in rem)
      className={`${montserrat.variable} ${inter.variable} ${jetbrains.variable} antialiased min-[1800px]:text-[18px] min-[2200px]:text-[21px] min-[3000px]:text-[26px]`}
    >
      <body className="flex min-h-screen flex-col">
        <Header lang={lang} nav={dict.nav} contactLabel={dict.contact.label} />
        <main className="relative z-[1] flex-1 overflow-x-clip">{children}</main>
        <Footer contact={dict.contact} footer={dict.footer} />
      </body>
    </html>
  );
}
