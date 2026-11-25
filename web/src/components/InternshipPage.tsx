import Marquee from "@/components/Marquee";
import PageHero, { type HeroAction } from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Section } from "@/data/media";

type Props = {
  label: string;
  company: string;
  eyebrow: string;
  role: string;
  actions: HeroAction[];
  band: readonly string[];
  sections: Section[];
};

// Same layout as the home page: hero, orange band, then centred sections.
export default function InternshipPage({
  label,
  company,
  eyebrow,
  role,
  actions,
  band,
  sections,
}: Props) {
  const cover = sections[0]?.projects[0];

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        line1={label}
        accent={company}
        text={role}
        actions={actions}
        image={{
          src: cover?.image ?? "",
          alt: cover?.title ?? company,
          kind: "screenshot",
        }}
      />

      <Marquee items={band} />

      <div className="mx-auto max-w-[110rem] px-6 pt-28 md:px-10 xl:px-16 2xl:px-20">
        {sections.map((s, n) => (
          <section key={s.heading} className="pb-28">
            <Reveal>
              <SectionHeading
                label={`${String(n + 1).padStart(2, "0")} · ${company}`}
                title={s.heading}
              />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 120} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
