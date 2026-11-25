"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*";

// Letters shuffle randomly and lock into place one by one.
// Runs once, when the text first scrolls into view.
// - Screen readers get the real text (sr-only); the animation is aria-hidden.
// - The real text stays in the layout (invisible) so the width never jumps.
export default function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | null>(null);

  const run = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (timer.current) window.clearInterval(timer.current);
    let frame = 0;
    timer.current = window.setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            ch === " " || i < frame / 2
              ? ch
              : LETTERS[Math.floor(Math.random() * LETTERS.length)],
          )
          .join(""),
      );
      frame++;
      if (frame / 2 > text.length && timer.current) {
        window.clearInterval(timer.current);
        setDisplay(text);
      }
    }, 30);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run();
        io.disconnect();
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [run]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden className="inline-grid">
        <span className="invisible [grid-area:1/1]">{text}</span>
        <span className="overflow-hidden [grid-area:1/1]">{display}</span>
      </span>
    </>
  );
}
