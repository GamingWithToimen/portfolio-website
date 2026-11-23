import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { portfolioImages, withImages } from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

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
  const projects = withImages(dict.portfolio.projects, portfolioImages);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="rise">
        <SectionHeading label={dict.portfolio.label} title={dict.portfolio.title} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
