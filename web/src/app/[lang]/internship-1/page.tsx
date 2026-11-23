import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipPage from "@/components/InternshipPage";
import {
  companies,
  internship1Images,
  sectionsWithImages,
} from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/internship-1">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.internship1.label} — ${companies.internship1}` };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/internship-1">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = (await getDictionary(lang)).internship1;

  return (
    <InternshipPage
      label={d.label}
      title={companies.internship1}
      roleTitle={d.roleTitle}
      role={d.role}
      sections={sectionsWithImages(d.sections, internship1Images)}
    />
  );
}
