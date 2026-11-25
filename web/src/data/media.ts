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

export const photo = "/images/profile-innovaware.jpg";

// Numbers from the CV; labels are in dict.stats (same order)
export const statValues = ["6–10", "30", "2–5x", "2"] as const;

export const contactLinks = {
  email: "tijmevervoort@gmail.com",
  // Fixed subject so a Gmail filter can label mail sent from the site
  mailSubject: "[Portfolio] Contact via tijmevervoort website",
  linkedin: "https://www.linkedin.com/in/tijme-vervoort-529406204",
  github: "https://github.com/GamingWithToimen",
  cv: "/cv/Tijme-Vervoort-CV.pdf",
} as const;

export type FeaturedKey = "crm" | "signature" | "dataDefence" | "portfolioSite";

// Highlighted work; titles and descriptions are in dict.featured.items
export const featured: { key: FeaturedKey; tags: string[]; github?: string }[] = [
  {
    key: "crm",
    tags: ["C# / .NET 10", "Laravel", "REST APIs", "MySQL", "GitLab CI/CD"],
  },
  {
    key: "signature",
    tags: ["HTML", "CSS", "Email clients"],
    github: "https://github.com/GamingWithToimen/siganture",
  },
  {
    key: "dataDefence",
    tags: ["C#", "Unity"],
    github: "https://github.com/GamingWithToimen/Data-Defence",
  },
  {
    key: "portfolioSite",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/GamingWithToimen/portfolio-website",
  },
];

export const workSkills = [
  "C#",
  ".NET 10",
  "Laravel",
  "REST APIs",
  "React",
  "Next.js",
  "CRM",
] as const;

// Words for the orange band on each page
export const bandItems = {
  portfolio: ["C#", "Unity", "Next.js", "React", "HTML5", "CSS3"],
  internship1: ["C#", "ESP32", "Azure DevOps", "ISPConfig", "Rememberz", "Milight"],
  internship2: ["C#", "Python", "Django", "Azure DevOps", "Wagtail", "Bootstrap Email"],
} as const;

export const companies = {
  internship1: "Omnilan",
  internship2: "AB Transport",
} as const;

export type TimelineEntry = {
  /** Key into dict.timeline.items. */
  key: "innovaware" | "abTransport" | "omnilan" | "kw1c";
  org: string;
  kind: "work" | "internship" | "education";
  /** "YYYY-MM"; end null means current. */
  start: string;
  end: string | null;
  /** Page under /[lang]/ with more detail, if any. */
  page?: string;
};

// Newest first. Dates from the CV.
export const timeline: TimelineEntry[] = [
  { key: "innovaware", org: "Innovaware", kind: "work", start: "2026-09", end: null },
  {
    key: "abTransport",
    org: "AB Transport",
    kind: "internship",
    start: "2025-02",
    end: "2025-06",
    page: "internship-2",
  },
  {
    key: "omnilan",
    org: "Omnilan",
    kind: "internship",
    start: "2023-08",
    end: "2024-02",
    page: "internship-1",
  },
  {
    key: "kw1c",
    org: "Koning Willem I College",
    kind: "education",
    start: "2022-08",
    end: "2026-06",
  },
];

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
