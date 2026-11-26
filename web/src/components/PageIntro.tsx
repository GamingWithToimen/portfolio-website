import Link from "next/link";
import { container } from "@/lib/styles";

// Top of the portfolio and internship pages: back link, optional eyebrow,
// huge title with an accent full stop, intro text and optional extra content.
export default function PageIntro({
  back,
  eyebrow,
  title,
  text,
  children,
}: {
  back: { href: string; label: string };
  eyebrow?: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className={`${container} relative flex flex-col gap-7 pt-20 pb-20 md:pt-24 md:pb-24`}>
        <Link
          href={back.href}
          className="rise inline-flex min-h-8 items-center self-start font-mono text-[0.8125rem] text-muted transition-colors hover:text-white"
        >
          <span aria-hidden>←&nbsp;</span>
          {back.label.toLowerCase()}
        </Link>
        {eyebrow && (
          <p className="rise font-mono text-[0.8125rem] tracking-[0.06em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className="rise hyphens-auto break-words font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] font-black tracking-[-0.02em] uppercase"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
          <span className="text-accent">.</span>
        </h1>
        <p
          className="rise max-w-[39rem] text-lg leading-relaxed text-[#d0d0d0] md:text-[1.1875rem]"
          style={{ animationDelay: "0.2s" }}
        >
          {text}
        </p>
        {children}
      </div>
    </section>
  );
}
