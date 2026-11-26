"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = {
  href: string;
  label: string;
  /** Path prefixes (after the language) on which this link is the current section. */
  activeOn?: string[];
};

/** True when the current page belongs to this link's section, e.g. /nl/internship-1 → Work. */
export function useIsActive() {
  const rest = usePathname().split("/").slice(2).join("/");
  return (link: NavLink) =>
    Boolean(link.activeOn?.some((p) => rest === p || rest.startsWith(`${p}/`)));
}

// Desktop navigation: small uppercase links; the current section gets an accent underline.
export default function NavLinks({ links }: { links: NavLink[] }) {
  const isActive = useIsActive();

  return (
    <ul className="hidden items-center gap-7 font-display text-xs font-extrabold tracking-[0.14em] uppercase md:flex">
      {links.map((l) => {
        const active = isActive(l);
        return (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`block border-b-2 py-2 transition-colors hover:text-white ${
                active ? "border-accent text-white" : "border-transparent text-muted"
              }`}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
