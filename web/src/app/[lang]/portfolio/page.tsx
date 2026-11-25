import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturedGrid from "@/components/FeaturedGrid";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { bandItems, photo, portfolioImages, withImages } from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const container = "mx-auto max-w-[110rem] px-6 md:px-10 xl:px-16 2xl:px-20";

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
      <PageHero
        eyebrow={dict.home.eyebrow}
        line1={dict.nav.portfolio}
        accent={dict.home.projectsTitle}
        actions={[
          { href: "#contact", label: dict.contact.cta },
          { href: `/${lang}/internship-1`, label: dict.nav.internship1 },
        ]}
        image={{ src: photo, alt: dict.home.photoAlt, unoptimized: true }}
      />

      <Marquee items={bandItems.portfolio} />

      <section className={`${container} py-28`}>
        <Reveal>
          <SectionHeading
            label={`01 · ${dict.home.selectedLabel}`}
            title={dict.home.projectsTitle}
          />
        </Reveal>
        <FeaturedGrid texts={dict.featured} />
      </section>

      <section className={`${container} pb-28`}>
        <Reveal>
          <SectionHeading
            label={`02 · ${dict.portfolio.label}`}
            title={dict.portfolio.exercisesTitle}
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exercises.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 120} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
