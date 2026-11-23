import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import type { Section } from "@/data/media";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  roleTitle: string;
  role: string;
  sections: Section[];
};

export default function InternshipPage({
  label,
  title,
  subtitle,
  roleTitle,
  role,
  sections,
}: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="rise mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">{label}</p>
        <h1 className="font-display mt-2 text-6xl uppercase leading-none sm:text-8xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
      </div>

      <div className="mb-20 max-w-3xl rounded-xl border border-line bg-surface p-8">
        <h2 className="font-display text-2xl uppercase">{roleTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted">{role}</p>
      </div>

      {sections.map((s) => (
        <section key={s.heading} className="mb-20">
          <SectionHeading label={title} title={s.heading} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
