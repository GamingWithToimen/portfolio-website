import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipPage from "@/components/InternshipPage";
import {
  bandItems,
  companies,
  internship2Images,
  sectionsWithImages,
  timeline,
} from "@/data/media";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/period";

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
  const dict = await getDictionary(lang);
  const d = dict.internship2;
  const entry = timeline.find((t) => t.page === "internship-2");
  const period = entry
    ? formatPeriod(lang, entry.start, entry.end, dict.timeline.present)
    : d.label;

  return (
    <InternshipPage
      label={d.label}
      company={companies.internship2}
      eyebrow={`${period} · ${d.subtitle}`}
      role={d.role}
      actions={[
        { href: `/${lang}/internship-1`, label: dict.nav.internship1 },
        { href: `/${lang}/portfolio`, label: dict.nav.portfolio },
      ]}
      band={bandItems.internship2}
      sections={sectionsWithImages(d.sections, internship2Images)}
    />
  );
}
