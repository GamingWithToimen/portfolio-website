import Link from "next/link";
import { notFound } from "next/navigation";
import FeaturedGrid from "@/components/FeaturedGrid";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline, { type TimelineItem } from "@/components/Timeline";
import { photo, statValues, timeline, workSkills } from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/period";

const container = "mx-auto max-w-[110rem] px-6 md:px-10 xl:px-16 2xl:px-20";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const timelineItems: TimelineItem[] = timeline.map((t) => ({
    org: t.org,
    role: dict.timeline.items[t.key].role,
    description: dict.timeline.items[t.key].description,
    period: formatPeriod(lang, t.start, t.end, dict.timeline.present),
    kind: dict.timeline.kinds[t.kind],
    current: t.end === null,
    href: t.page ? `/${lang}/${t.page}` : undefined,
    more: t.page ? dict.timeline.more.replace("{org}", t.org) : undefined,
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.home.eyebrow}
        line1={dict.home.iAm}
        accent="Tijme"
        text={dict.profile.tagline}
        actions={[
          { href: "#contact", label: dict.contact.cta },
          { href: "#work", label: dict.home.explore },
        ]}
        image={{ src: photo, alt: dict.home.photoAlt, unoptimized: true }}
      />

      <Marquee items={workSkills} />

      <section className="bg-surface">
        <dl className={`${container} grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-4`}>
          {statValues.map((value, i) => (
            <Reveal key={value} delay={i * 120} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm leading-snug text-muted">{dict.stats[i]}</dt>
              <dd className="font-display font-black text-4xl text-accent sm:text-5xl">{value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className={`${container} py-28`}>
        <Reveal>
          <SectionHeading label={`01 · ${dict.home.aboutLabel}`} title={dict.home.aboutTitle} />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal from="left" delay={100}>
            <p className="leading-relaxed text-muted xl:text-lg">{dict.profile.bio1}</p>
          </Reveal>
          <Reveal from="right" delay={200}>
            <p className="leading-relaxed text-muted xl:text-lg">{dict.profile.bio2}</p>
          </Reveal>
        </div>
      </section>

      <section id="timeline" className={`${container} scroll-mt-20 pb-28`}>
        <Reveal>
          <SectionHeading label={`02 · ${dict.timeline.label}`} title={dict.timeline.title} />
        </Reveal>
        <Timeline items={timelineItems} />
        <div className="sr-only">
          <p>{dict.work.skillsLabel}</p>
          <ul>
            {workSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className={`${container} scroll-mt-20 pb-28`}>
        <Reveal>
          <SectionHeading
            label={`03 · ${dict.home.selectedLabel}`}
            title={dict.home.projectsTitle}
          />
        </Reveal>
        <FeaturedGrid texts={dict.featured} />
        <p className="mt-12 text-center">
          <Link
            href={`/${lang}/portfolio`}
            className="group inline-block border-2 border-line px-6 py-3.5 text-sm font-extrabold uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.portfolio}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </p>
      </section>
    </>
  );
}
