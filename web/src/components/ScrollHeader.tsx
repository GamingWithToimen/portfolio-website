"use client";

import { useEffect, useRef } from "react";

// Sticky, translucent black header with a thin accent reading-progress bar.
// The bar is updated directly on the element (no React re-render per scroll).
export default function ScrollHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current) {
          bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-black/[0.88] backdrop-blur-md">
      {children}
      <div
        ref={bar}
        aria-hidden
        className="absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-accent"
      />
    </header>
  );
}
