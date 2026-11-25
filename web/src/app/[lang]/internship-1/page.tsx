import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipPage from "@/components/InternshipPage";
import {
  bandItems,
  companies,
  internship1Images,
  sectionsWithImages,
  timeline,
} from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/period";

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
  const dict = await getDictionary(lang);
  const d = dict.internship1;
  const entry = timeline.find((t) => t.page === "internship-1");

  return (
    <InternshipPage
      label={d.label}
      company={companies.internship1}
      eyebrow={
        entry ? formatPeriod(lang, entry.start, entry.end, dict.timeline.present) : d.label
      }
      role={d.role}
      actions={[
        { href: `/${lang}/internship-2`, label: dict.nav.internship2 },
        { href: `/${lang}/portfolio`, label: dict.nav.portfolio },
      ]}
      band={bandItems.internship1}
      sections={sectionsWithImages(d.sections, internship1Images)}
    />
  );
}
