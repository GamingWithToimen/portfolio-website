import Link from "next/link";
import { btnOutline, container } from "@/lib/styles";

// Shared look for the 404 and error pages: big code, title, text and buttons.
export default function ErrorScreen({
  code,
  title,
  text,
  homeHref,
  homeLabel,
  children,
}: {
  code: string;
  title: string;
  text: string;
  homeHref: string;
  homeLabel: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className={`${container} relative flex min-h-[70svh] flex-col justify-center py-24`}>
        <p className="font-mono text-[0.8125rem] text-accent" aria-hidden>
          {"// "}
          {code}
        </p>
        <h1 className="mt-4 hyphens-auto break-words font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-black uppercase">
          {title}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d0d0d0]">{text}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={homeHref} className={btnOutline}>
            {homeLabel} <span aria-hidden>→</span>
          </Link>
          {children}
        </div>
      </div>
    </section>
  );
}
