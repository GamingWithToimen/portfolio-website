"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";

export type TimelineItem = {
  org: string;
  role: string;
  description: string;
  period: string;
  kind: string;
  current: boolean;
  href?: string;
  more?: string;
};

// Vertical timeline; the accent line fills up as you scroll through it.
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    // Updates the fill directly on the element (no React re-render per scroll)
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
        if (fill.current) fill.current.style.transform = `translateX(-50%) scaleY(${p})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* track + fill */}
      <div
        aria-hidden
        className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-line md:left-1/2"
      />
      <div
        ref={fill}
        aria-hidden
        className="absolute left-4 top-0 h-full w-0.5 origin-top bg-accent md:left-1/2"
        style={{ transform: "translateX(-50%) scaleY(0)" }}
      />
      <ol className="relative">

      {items.map((item, i) => {
        const right = i % 2 === 1;
        return (
          <li
            key={item.org}
            className="relative pb-16 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
          >
            {/* dot */}
            <span
              aria-hidden
              className={`absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rotate-45 border-2 border-accent md:left-1/2 ${
                item.current ? "bg-accent shadow-[0_0_0_6px_color-mix(in_oklab,var(--accent)_25%,transparent)]" : "bg-bg"
              }`}
            />

            {/* period on the opposite side (desktop) */}
            <p
              className={`hidden pt-7 font-display font-black text-2xl uppercase text-muted md:block ${
                right ? "md:order-1 md:text-right" : "md:order-2"
              }`}
            >
              {item.period}
            </p>

            <Reveal
              from={right ? "right" : "left"}
              className={right ? "md:order-2" : "md:order-1"}
            >
              <GlowCard
                className={`overflow-hidden bg-surface ${
                  right ? "border-l-4" : "border-l-4 md:border-l-0 md:border-r-4"
                } border-accent`}
              >
                <div className="relative z-20 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                      {item.kind}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted md:hidden">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-4 hyphens-auto break-words font-display font-black text-3xl uppercase leading-none">
                    {item.org}
                  </h3>
                  <p className="mt-2 font-semibold text-accent">{item.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  {item.href && item.more && (
                    <Link
                      href={item.href}
                      className="group mt-5 inline-block text-sm font-extrabold uppercase"
                    >
                      {item.more}{" "}
                      <span className="inline-block text-accent transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </GlowCard>
            </Reveal>
          </li>
        );
      })}
      </ol>
    </div>
  );
}
