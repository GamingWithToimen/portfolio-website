import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CareerList, { type CareerItem } from "@/components/CareerList";
import Reveal from "@/components/Reveal";
import TwoLineHeading from "@/components/TwoLineHeading";
import WorkCard from "@/components/WorkCard";
import { contactLinks, featured, photo, stack, statValues, timeline } from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/period";
import { btnOutline, container, linkCaps } from "@/lib/styles";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const career: CareerItem[] = timeline.map((t) => ({
    org: t.org,
    role: dict.timeline.items[t.key].role,
    description: dict.timeline.items[t.key].description,
    period: formatPeriod(lang, t.start, t.end, dict.timeline.present),
    href: t.page ? `/${lang}/${t.page}` : undefined,
    more: t.page ? dict.timeline.more.replace("{org}", t.org) : undefined,
  }));

  return (
    <>
      {/* HERO */}
      <section id="top" className="relative">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div className={`${container} relative flex flex-wrap items-center gap-12 pt-16 pb-32 md:pt-20`}>
          <div className="flex min-w-0 flex-[1_1_27.5rem] flex-col gap-7">
            <p className="rise font-mono text-[0.8125rem] tracking-[0.04em] text-muted">
              {"// "}
              {dict.home.eyebrow}
            </p>
            <h1
              className="rise font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.92] font-black tracking-[-0.02em] uppercase"
              style={{ animationDelay: "0.1s" }}
            >
              {dict.home.iAm}
              <br />
              Tijme<span className="text-accent">.</span>
            </h1>
            <p
              className="rise max-w-[30rem] text-lg leading-relaxed text-[#d0d0d0]"
              style={{ animationDelay: "0.2s" }}
            >
              {dict.profile.tagline}
            </p>
            <div
              className="rise flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="#work" className={btnOutline}>
                {dict.home.explore}
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <a
                href={contactLinks.cv}
                download
                className={`${linkCaps} min-h-12 text-white hover:text-[#bdbdbd]`}
              >
                {dict.contact.cv} <span aria-hidden>&nbsp;↓</span>
              </a>
            </div>
          </div>

          <div
            className="rise relative mx-auto w-full max-w-[32.5rem] min-w-0 flex-[1_1_27.5rem]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute top-5 -left-5 right-5 -bottom-5 border-[1.5px] border-accent"
              />
              <div className="relative aspect-[4/5] overflow-hidden border border-[#333] bg-surface">
                <Image
                  src={photo}
                  alt={dict.home.photoAlt}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
            {/* Little terminal overlapping the photo */}
            <div className="absolute -bottom-10 left-0 w-[300px] max-w-[85%] border border-[#333] bg-[#0a0a0a] font-mono text-[0.8125rem] leading-[1.7] sm:-left-6">
              <div aria-hidden className="flex gap-1.5 border-b border-[#222] px-3.5 py-2.5">
                <span className="h-[9px] w-[9px] rounded-full bg-[#3a3a3a]" />
                <span className="h-[9px] w-[9px] rounded-full bg-[#3a3a3a]" />
                <span className="h-[9px] w-[9px] rounded-full bg-accent" />
              </div>
              <div className="px-4 py-3.5 text-[#d0d0d0]">
                <p>
                  <span className="text-[#8a8a8a]">~/tijme $</span> whoami
                </p>
                <p className="text-white">{dict.home.terminalWho}</p>
                <p>
                  <span className="text-[#8a8a8a]">~/tijme $</span> status
                </p>
                <p className="text-accent">
                  <span aria-hidden>● </span>
                  {dict.home.terminalStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white text-black">
        <dl
          className={`${container} grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] gap-8 py-18`}
        >
          {statValues.map((value, i) => (
            <Reveal
              key={value}
              delay={i * 100}
              className="flex flex-col-reverse gap-1.5 border-l-[1.5px] border-black pl-5"
            >
              <dt className="text-sm text-[#555]">{dict.stats[i]}</dt>
              <dd className="font-display text-5xl leading-none font-black">{value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* WORK */}
      <section id="work" aria-labelledby="work-title" className="scroll-mt-20 bg-black">
        <div className={`${container} flex flex-col gap-14 py-24 md:py-30`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TwoLineHeading id="work-title" light={dict.home.selectedLabel} bold={dict.nav.work} />
            <Link
              href={`/${lang}/portfolio`}
              className={`${linkCaps} group px-0 text-white hover:text-[#bdbdbd]`}
            >
              {dict.nav.allProjects}
              <span aria-hidden className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] gap-6">
            {featured.slice(0, 3).map((f, i) => (
              <Reveal key={f.key} delay={i * 120}>
                <WorkCard
                  f={f}
                  number={i + 1}
                  title={dict.featured.items[f.key].title}
                  description={dict.featured.items[f.key].description}
                  githubLabel={dict.featured.github}
                  privateLabel={dict.featured.private}
                  idPrefix="home"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CAREER */}
      <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-white text-black">
        <div className={`${container} flex flex-wrap gap-16 py-24 md:py-28`}>
          <div className="flex min-w-0 flex-[1_1_20rem] flex-col gap-6">
            <TwoLineHeading
              id="about-title"
              light={dict.home.aboutLabel}
              bold={dict.home.aboutTitle}
              tone="light"
            />
            <p className="max-w-[27.5rem] text-[1.0625rem] leading-[1.7] text-[#333]">
              {dict.profile.bio1}
            </p>
            <p className="max-w-[27.5rem] text-[1.0625rem] leading-[1.7] text-[#333]">
              {dict.profile.bio2}
            </p>
          </div>
          <div className="min-w-0 flex-[1.4_1_30rem]">
            <CareerList items={career} label={dict.timeline.label} />
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20 bg-black">
        <div className={`${container} flex flex-wrap gap-16 py-24 md:py-28`}>
          <TwoLineHeading
            id="stack-title"
            light={dict.stack.label}
            bold={dict.stack.title}
            className="flex-[1_1_17.5rem]"
          />
          <dl className="grid min-w-0 flex-[2_1_35rem] grid-cols-[repeat(auto-fit,minmax(13.75rem,1fr))] border-t border-l border-[#333]">
            {stack.map((g) => (
              <div
                key={g.key}
                className="flex flex-col gap-2 border-r border-b border-[#333] p-6"
              >
                <dt className="font-mono text-xs text-muted uppercase">
                  {dict.stack.groups[g.key]}
                </dt>
                <dd className="leading-[1.7]">{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
