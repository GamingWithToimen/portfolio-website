import type { Locale } from "@/i18n/config";

/** "aug 2023 – feb 2024" (month names in the page language); end null = `present`. */
export function formatPeriod(
  lang: Locale,
  start: string,
  end: string | null,
  present: string,
): string {
  const month = new Intl.DateTimeFormat(lang === "no" ? "nb" : lang, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const fmt = (ym: string) => month.format(new Date(`${ym}-01T00:00:00Z`));
  return `${fmt(start)} – ${end ? fmt(end) : present}`;
}
