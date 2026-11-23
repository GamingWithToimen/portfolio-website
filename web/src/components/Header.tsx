import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Header({
  lang,
  nav,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
}) {
  const links = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/portfolio`, label: nav.portfolio },
    { href: `/${lang}/internship-1`, label: nav.internship1 },
    { href: `/${lang}/internship-2`, label: nav.internship2 },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link
          href={`/${lang}`}
          className="font-display text-xl uppercase tracking-wider text-accent"
        >
          Tijme Vervoort
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm uppercase tracking-widest text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher current={lang} label={nav.language} />
        </div>
      </nav>
    </header>
  );
}
