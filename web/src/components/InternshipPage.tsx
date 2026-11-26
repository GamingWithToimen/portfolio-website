import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import type { Section } from "@/data/media";
import { container, linkCaps, monoLabel } from "@/lib/styles";

export type InternshipFact = {
  label: string;
  value: string;
  /** Big accent number (the headline result) */
  highlight?: boolean;
  /** Small line under the value */
  note?: string;
};

type Props = {
  back: { href: string; label: string };
  eyebrow: string;
  company: string;
  role: string;
  /** Facts grid under the intro: role, stack, result */
  facts: InternshipFact[];
  sections: Section[];
  next: { href: string; label: string; company: string };
};

// Case-study layout: dark intro with a facts grid, numbered white sections with
// screenshots alternating left and right, then a link to the other internship.
export default function InternshipPage({
  back,
  eyebrow,
  company,
  role,
  facts,
  sections,
  next,
}: Props) {
  return (
    <>
      <PageIntro back={back} eyebrow={eyebrow} title={company} text={role}>
        <dl className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(13.75rem,1fr))] border-t border-l border-[#333] bg-black">
          {facts.map((f) => (
            <div key={f.label} className="border-r border-b border-[#333] px-6 py-5">
              <dt className={`${monoLabel} mb-2 text-muted`}>{f.label}</dt>
              <dd
                className={
                  f.highlight
                    ? "font-display text-[1.75rem] leading-tight font-black text-accent"
                    : "leading-relaxed"
                }
              >
                {f.value}
              </dd>
              {f.note && <dd className="mt-1 text-sm text-muted">{f.note}</dd>}
            </div>
          ))}
        </dl>
      </PageIntro>

      {sections.map((s, n) => (
        <section
          key={s.heading}
          aria-labelledby={`case-${n}`}
          className={`bg-white text-black ${n > 0 ? "border-t border-[#e4e4e4]" : ""}`}
        >
          <div className={`${container} flex flex-col gap-12 py-24 md:py-26`}>
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[0.8125rem] text-[#555]">
                {String(n + 1).padStart(2, "0")}
              </span>
              <h2
                id={`case-${n}`}
                className="hyphens-auto break-words font-display text-4xl leading-none font-black sm:text-5xl"
              >
                {s.heading}
              </h2>
            </div>

            <div className="flex flex-col">
              {s.projects.map((p, i) => (
                <Reveal key={p.title}>
                  <figure
                    className={`flex flex-col gap-6 border-t border-black py-8 md:items-center md:gap-14 ${
                      i % 2 ? "md:flex-row-reverse" : "md:flex-row"
                    } ${i === s.projects.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#d6d6d6] bg-[#f1f1f1] md:flex-[1.2_1_0]">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="flex flex-col gap-2 md:flex-[1_1_0]">
                      <h3 className="font-display text-xl font-extrabold">{p.title}</h3>
                      <p className="leading-relaxed text-[#222]">{p.description}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <nav aria-label={next.label} className="bg-black">
        <div className={`${container} flex flex-wrap items-center justify-between gap-6 py-14`}>
          <Link href={back.href} className={`${linkCaps} group px-0 text-white hover:text-[#bdbdbd]`}>
            <span aria-hidden className="mr-1.5 inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            {back.label}
          </Link>
          <Link href={next.href} className="group flex flex-col items-end gap-1 text-right">
            <span className={`${monoLabel} text-muted`}>{next.label}</span>
            <span className="font-display text-[1.75rem] font-black uppercase">
              {next.company}
              <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
