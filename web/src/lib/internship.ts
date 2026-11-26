import {
  bandItems,
  companies,
  internship1Images,
  internship2Images,
  internships,
  sectionsWithImages,
  statValues,
  timeline,
} from "@/data/media";
import type { InternshipFact } from "@/components/InternshipPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { formatPeriod } from "@/lib/period";

const pages = {
  "internship-1": { dictKey: "internship1", images: internship1Images },
  "internship-2": { dictKey: "internship2", images: internship2Images },
} as const;

export type InternshipSlug = keyof typeof pages;

/** Everything the internship page shows, built from the dictionary and data/media.ts. */
export function internshipProps(lang: Locale, dict: Dictionary, slug: InternshipSlug) {
  const { dictKey, images } = pages[slug];
  const d = dict[dictKey];
  const company = companies[dictKey];
  const entry = timeline.find((t) => t.page === slug);
  const period = entry ? formatPeriod(lang, entry.start, entry.end, dict.timeline.present) : "";
  const subtitle = "subtitle" in d ? ` · ${d.subtitle}` : "";

  // The other internship
  const other = internships.find((t) => t.page !== slug) ?? internships[0];

  const facts: InternshipFact[] = [
    {
      label: dict.internshipMeta.role,
      value: entry ? dict.timeline.items[entry.key].role : d.label,
    },
    { label: dict.internshipMeta.stack, value: bandItems[dictKey].join(" · ") },
  ];
  if (entry?.stat !== undefined) {
    facts.push({
      label: dict.internshipMeta.result,
      value: statValues[entry.stat],
      highlight: true,
      note: dict.stats[entry.stat],
    });
  }

  return {
    company,
    title: `${d.label} — ${company}`,
    props: {
      back: { href: `/${lang}/portfolio`, label: dict.nav.allProjects },
      eyebrow: `${d.label} · ${period}${subtitle}`,
      company,
      role: d.role,
      facts,
      sections: sectionsWithImages(d.sections, images),
      next: { href: `/${lang}/${other.page}`, label: dict.nav.nextInternship, company: other.org },
    },
  };
}
