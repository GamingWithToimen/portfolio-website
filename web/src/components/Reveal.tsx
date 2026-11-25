"use client";

import { useEffect, useRef, useState } from "react";

// Fades/slides its children in once they scroll into view.
// Content is only hidden when the browser runs scripts (@media (scripting: enabled)),
// so with JavaScript turned off everything stays visible.
// With reduced motion the content is never hidden.
const HIDDEN = {
  up: "motion-safe:[@media(scripting:enabled)]:translate-y-16 motion-safe:[@media(scripting:enabled)]:opacity-0",
  left: "motion-safe:[@media(scripting:enabled)]:-translate-x-16 motion-safe:[@media(scripting:enabled)]:opacity-0",
  right: "motion-safe:[@media(scripting:enabled)]:translate-x-16 motion-safe:[@media(scripting:enabled)]:opacity-0",
} as const;

export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: keyof typeof HIDDEN;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        visible ? "" : HIDDEN[from]
      } ${className}`}
    >
      {children}
    </div>
  );
}
