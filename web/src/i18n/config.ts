export const locales = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "no", label: "Norsk" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "fi", label: "Suomi" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  locales.some((l) => l.code === value);

/** Pick the best supported locale from an Accept-Language header. */
export function pickLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const requested = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of requested) {
    let base = tag.split("-")[0];
    if (base === "nb" || base === "nn") base = "no"; // Norwegian variants
    if (hasLocale(base)) return base;
  }
  return defaultLocale;
}
