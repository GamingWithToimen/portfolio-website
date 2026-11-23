import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipPage from "@/components/InternshipPage";
import {
  companies,
  internship2Images,
  sectionsWithImages,
} from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/internship-2">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.internship2.label} — ${companies.internship2}` };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/internship-2">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = (await getDictionary(lang)).internship2;

  return (
    <InternshipPage
      label={d.label}
      title={companies.internship2}
      subtitle={d.subtitle}
      roleTitle={d.roleTitle}
      role={d.role}
      sections={sectionsWithImages(d.sections, internship2Images)}
    />
  );
}
