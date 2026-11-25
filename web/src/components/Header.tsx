import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Magnetic from "@/components/Magnetic";
import MobileMenu from "@/components/MobileMenu";
import ScrollHeader from "@/components/ScrollHeader";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Header({
  lang,
  nav,
  contactLabel,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  contactLabel: string;
}) {
  const links = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/portfolio`, label: nav.portfolio },
    { href: `/${lang}/internship-1`, label: nav.internship1 },
    { href: `/${lang}/internship-2`, label: nav.internship2 },
  ];
  const contact = { href: "#contact", label: contactLabel };

  return (
    <ScrollHeader>
      <nav className="mx-auto flex max-w-[110rem] items-center justify-between gap-6 px-6 py-3 md:grid md:grid-cols-[auto_1fr_auto] md:px-10 md:py-4 xl:px-16 2xl:px-20">
        <Magnetic strength={0.5}>
          <Link
            href={`/${lang}`}
            className="flex h-11 w-11 items-center justify-center bg-[var(--text)] text-lg font-black tracking-tighter text-[var(--bg)] transition-colors hover:bg-accent hover:text-black group-data-[scrolled=true]/header:hover:text-white md:h-12 md:w-12"
            aria-label="Tijme Vervoort — Home"
          >
            TV
          </Link>
        </Magnetic>

        <ul className="hidden flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-extrabold uppercase tracking-wide text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-2 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={contact.href}
            className="hidden bg-accent px-4 py-2.5 text-sm font-extrabold uppercase text-black transition-colors hover:bg-[var(--text)] hover:text-[var(--bg)] group-data-[scrolled=true]/header:text-white md:block"
          >
            {contact.label}
          </Link>
          <LanguageSwitcher current={lang} label={nav.language} />
          <MobileMenu links={links} contact={contact} />
        </div>
      </nav>
    </ScrollHeader>
  );
}
