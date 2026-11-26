"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsActive, type NavLink } from "@/components/NavLinks";

// Hamburger menu for small screens; the full link list only shows when opened.
export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const isActive = useIsActive();

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
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#333] text-white"
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
          className="absolute inset-x-0 top-full border-b border-[#1e1e1e] bg-black px-6 pb-8 pt-2"
        >
          <ul>
            {links.map((l) => {
              const active = isActive(l);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between border-b border-[#1e1e1e] py-4 font-display text-2xl font-black text-white uppercase"
                  >
                    {l.label}
                    {active && <span aria-hidden className="h-2 w-2 bg-accent" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
