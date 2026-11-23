import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  nl: () => import("./dictionaries/nl").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  it: () => import("./dictionaries/it").then((m) => m.default),
  no: () => import("./dictionaries/no").then((m) => m.default),
  sv: () => import("./dictionaries/sv").then((m) => m.default),
  da: () => import("./dictionaries/da").then((m) => m.default),
  fi: () => import("./dictionaries/fi").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
