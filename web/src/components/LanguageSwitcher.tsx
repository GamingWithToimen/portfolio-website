"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname();
  // "/nl/portfolio" -> "portfolio"; keep the page when switching language
  const rest = pathname.split("/").slice(2).join("/");
  const hrefFor = (code: string) => `/${code}${rest ? `/${rest}` : ""}`;

  return (
    <details className="relative">
      <summary
        aria-label={label}
        className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent [&::-webkit-details-marker]:hidden"
      >
        <span aria-hidden>🌐</span>
        {current}
      </summary>
      <ul className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-surface shadow-xl">
        {locales.map((l) => (
          <li key={l.code}>
            <Link
              href={hrefFor(l.code)}
              hrefLang={l.code}
              lang={l.code}
              aria-current={l.code === current ? "true" : undefined}
              onClick={(e) =>
                e.currentTarget.closest("details")?.removeAttribute("open")
              }
              className={`block px-4 py-2 text-sm transition-colors hover:bg-line ${
                l.code === current ? "text-accent" : "text-text"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
