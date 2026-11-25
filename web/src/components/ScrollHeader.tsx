"use client";

import { useEffect, useRef, useState } from "react";

// Sticky header that turns white after scrolling, with a reading-progress bar.
// The progress bar is updated directly on the element (no React re-render per scroll).
export default function ScrollHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
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
    <header
      data-scrolled={scrolled}
      // On the white header the orange is darkened (#c2410c, 5.2:1 on white) for contrast
      className="group/header sticky top-0 z-50 bg-bg/90 backdrop-blur transition-colors duration-300 data-[scrolled=true]:shadow-[0_8px_30px_rgba(0,0,0,0.25)] data-[scrolled=true]:[--accent:#c2410c] data-[scrolled=true]:[--bg:#fff] data-[scrolled=true]:[--line:#d4d4d4] data-[scrolled=true]:[--muted:#555] data-[scrolled=true]:[--surface:#f4f4f4] data-[scrolled=true]:[--text:#000]"
    >
      {children}
      <div
        ref={bar}
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-accent"
      />
    </header>
  );
}
