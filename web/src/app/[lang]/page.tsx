import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import {
  employer,
  photo,
  portfolioImages,
  statValues,
  withImages,
  workSkills,
} from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const projects = withImages(dict.portfolio.projects, portfolioImages);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="rise">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {dict.home.eyebrow}
          </p>
          <h1 className="font-display mt-3 text-6xl uppercase leading-[0.95] sm:text-8xl">
            {dict.home.iAm} <span className="text-accent">Tijme</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${lang}/portfolio`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-transform hover:scale-105"
            >
              {dict.home.explore}
            </Link>
            <Link
              href={`/${lang}/internship-2`}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              {dict.home.internships}
            </Link>
          </div>
        </div>
        <div
          className="rise relative aspect-square overflow-hidden rounded-2xl border border-line"
          style={{ animationDelay: "0.15s" }}
        >
          <Image
            src={photo}
            alt={dict.home.photoAlt}
            fill
            priority
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {statValues.map((value, i) => (
            <div key={value}>
              <dt className="sr-only">{dict.stats[i]}</dt>
              <dd className="font-display text-5xl text-accent">{value}</dd>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {dict.stats[i]}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading label={dict.home.aboutLabel} title={dict.home.aboutTitle} />
        <div className="grid gap-8 md:grid-cols-2">
          <p className="leading-relaxed text-muted">{dict.profile.bio1}</p>
          <p className="leading-relaxed text-muted">{dict.profile.bio2}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading label={dict.work.label} title={dict.work.title} />
        <article className="rounded-xl border border-line bg-surface p-8 transition-colors hover:border-accent">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-4xl uppercase tracking-wide">
                {employer}
              </h3>
              <p className="mt-1 text-lg text-accent">{dict.work.role}</p>
            </div>
            <span className="rounded-full border border-accent px-4 py-1 text-xs uppercase tracking-widest text-accent">
              {dict.work.period}
            </span>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            {dict.work.description}
          </p>
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {dict.work.skillsLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {workSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line px-4 py-1.5 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          label={dict.home.selectedLabel}
          title={dict.home.projectsTitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
