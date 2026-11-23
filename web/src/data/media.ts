// Language-independent data: images, numbers and names.
// All translated text lives in src/i18n/dictionaries/.

export type Project = {
  title: string;
  description: string;
  image: string;
};

export type Section = {
  heading: string;
  projects: Project[];
};

export const photo = "/images/profile.jpg";

export const statValues = ["22", "2", "ERP", "4+"] as const;

export const companies = {
  internship1: "Omnilan",
  internship2: "AB Transport",
} as const;

export const portfolioImages = [
  "/images/regennboog.png",
  "/images/tabelwedstrijden.png",
  "/images/oefening1.6.png",
  "/images/oefening2.1.png",
];

// One list of images per section, in the same order as the dictionaries.
export const internship1Images = [
  ["/images/ispconfig.png", "/images/email.png", "/images/email-hoe.png"],
  [
    "/images/rememberzhoofdmenu.png",
    "/images/milight.png",
    "/images/rememberz.png",
  ],
];

export const internship2Images = [
  ["/images/wagtail_logo.png", "/images/blog_editor.png"],
  ["/images/bootstrap_email.png"],
  ["/images/topics_codecademy.png", "/images/codecademy_certificaten.png"],
];

type Text = { title: string; description: string };
type SectionText = { heading: string; projects: Text[] };

/** Combine translated text with the matching images. */
export function withImages(texts: Text[], images: string[]): Project[] {
  return texts.map((t, i) => ({ ...t, image: images[i] }));
}

export function sectionsWithImages(
  sections: SectionText[],
  images: string[][],
): Section[] {
  return sections.map((s, i) => ({
    heading: s.heading,
    projects: withImages(s.projects, images[i]),
  }));
}
