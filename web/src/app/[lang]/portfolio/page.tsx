import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { featured, internships, portfolioImages, withImages } from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/period";
import { container, monoLabel } from "@/lib/styles";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/portfolio">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: (await getDictionary(lang)).portfolio.title };
}

export default async function Page({ params }: PageProps<"/[lang]/portfolio">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const exercises = withImages(dict.portfolio.projects, portfolioImages);

  return (
    <>
      <PageIntro
        back={{ href: `/${lang}`, label: dict.nav.backHome }}
        title={dict.home.projectsTitle}
        text={dict.portfolio.intro}
      />

      {/* 01 · FEATURED */}
      <section aria-labelledby="featured-title" className="bg-black">
        <div className={`${container} flex flex-col gap-10 pt-10 pb-28`}>
          <h2 id="featured-title" className={`${monoLabel} text-[0.8125rem] text-muted`}>
            01 · {dict.home.selectedLabel}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((f, i) => (
              <Reveal key={f.key} delay={(i % 2) * 120}>
                <WorkCard
                  f={f}
                  number={i + 1}
                  title={dict.featured.items[f.key].title}
                  description={dict.featured.items[f.key].description}
                  githubLabel={dict.featured.github}
                  privateLabel={dict.featured.private}
                  size="large"
                  idPrefix="portfolio"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · INTERNSHIPS */}
      <section aria-labelledby="internships-title" className="border-t border-[#1e1e1e] bg-black">
        <div className={`${container} flex flex-col gap-8 py-24`}>
          <h2 id="internships-title" className={`${monoLabel} text-[0.8125rem] text-muted`}>
            02 · {dict.home.internships}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {internships.map((t) => (
              <Link
                key={t.key}
                href={`/${lang}/${t.page}`}
                className="group flex flex-col gap-3.5 border border-[#333] p-8 transition-colors hover:bg-[#151515] focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span className="font-mono text-xs text-muted uppercase">
                  {formatPeriod(lang, t.start, t.end, dict.timeline.present)}
                </span>
                <span className="font-display text-[2rem] leading-tight font-black uppercase">
                  {t.org}
                </span>
                <span className="leading-relaxed text-[#d0d0d0]">
                  {dict.timeline.items[t.key].description}
                </span>
                <span className="mt-auto pt-2 font-display text-xs font-extrabold tracking-[0.14em] text-accent uppercase">
                  {dict.timeline.more.replace("{org}", t.org)}
                  <span aria-hidden className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · EDUCATION (collapsed) */}
      <section aria-labelledby="school-title" className="bg-white text-black">
        <div className={`${container} flex flex-col gap-6 py-20`}>
          <h2 id="school-title" className={`${monoLabel} text-[0.8125rem] text-[#555]`}>
            03 · {dict.portfolio.label}
          </h2>
          <details className="group border-y border-black">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-1 py-3 [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl font-extrabold">
                  {dict.portfolio.exercisesTitle} ({exercises.length})
                </span>
                <span className="text-sm text-[#555]">{dict.portfolio.exercisesSubtitle}</span>
              </span>
              <svg
                aria-hidden
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="shrink-0 transition-transform group-open:rotate-180"
              >
                <path d="m5 8 5 5 5-5" />
              </svg>
            </summary>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(16.25rem,1fr))] gap-4 px-1 pb-6">
              {exercises.map((p) => (
                <li key={p.title} className="flex flex-col gap-2.5 border border-[#d6d6d6] p-4">
                  <div className="relative aspect-video overflow-hidden border border-[#e4e4e4] bg-[#f1f1f1]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top-left"
                    />
                  </div>
                  <strong className="font-display">{p.title}</strong>
                  <span className="text-sm leading-relaxed text-[#555]">{p.description}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </>
  );
}
