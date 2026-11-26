"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, type Locale } from "@/i18n/config";

// Square language button in the site style; closes on outside click and Esc.
export default function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // "/nl/portfolio" -> "portfolio"; keep the page when switching language
  const rest = pathname.split("/").slice(2).join("/");
  const hrefFor = (code: string) => `/${code}${rest ? `/${rest}` : ""}`;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-2 border border-[#333] px-3 font-display text-xs font-extrabold tracking-[0.14em] text-white uppercase transition-colors hover:border-white"
      >
        {current}
        <svg
          aria-hidden
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-48 border border-[#333] bg-black shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          {locales.map((l) => (
            <li key={l.code}>
              <Link
                href={hrefFor(l.code)}
                hrefLang={l.code}
                lang={l.code}
                aria-current={l.code === current ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[#151515] ${
                  l.code === current ? "font-semibold text-accent" : "text-white"
                }`}
              >
                {l.label}
                <span className="font-mono text-xs uppercase text-muted">{l.code}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
