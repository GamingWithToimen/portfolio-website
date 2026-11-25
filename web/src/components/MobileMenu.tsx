"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

// Hamburger menu for small screens; the full link list only shows when opened.
export default function MobileMenu({
  links,
  contact,
}: {
  links: NavLink[];
  contact: NavLink;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-2 border-line text-[var(--text)]"
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-line bg-bg px-6 pb-8 pt-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className="block border-b border-line py-4 text-2xl font-black uppercase text-[var(--text)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={contact.href}
            onClick={close}
            className="mt-6 block bg-accent px-5 py-4 text-center font-extrabold uppercase text-black group-data-[scrolled=true]/header:text-white"
          >
            {contact.label}
          </Link>
        </div>
      )}
    </div>
  );
}
