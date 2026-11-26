import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import NavLinks, { type NavLink } from "@/components/NavLinks";
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
  const links: NavLink[] = [
    {
      href: `/${lang}/portfolio`,
      label: nav.work,
      activeOn: ["portfolio", "internship-1", "internship-2"],
    },
    { href: `/${lang}#about`, label: nav.about },
    { href: `/${lang}#stack`, label: nav.stack },
    { href: "#contact", label: contactLabel },
  ];

  return (
    <ScrollHeader>
      <nav className="mx-auto flex max-w-[80rem] items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <Link
          href={`/${lang}`}
          aria-label="Tijme Vervoort — Home"
          className="flex items-center gap-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Logo />
          <span className="hidden font-display text-sm font-extrabold tracking-[0.12em] text-white uppercase sm:inline">
            Tijme Vervoort
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <NavLinks links={links} />
          <div className="flex items-center gap-3 md:border-l md:border-[#333] md:pl-6">
            <LanguageSwitcher current={lang} label={nav.language} />
            <MobileMenu links={links} />
          </div>
        </div>
      </nav>
    </ScrollHeader>
  );
}
