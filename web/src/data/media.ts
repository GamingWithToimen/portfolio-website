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
export const statValues = ["6–10", "30", "2–5×", "2"] as const;

export const contactLinks = {
  email: "tijmevervoort@gmail.com",
  // Fixed subject so a Gmail filter can label mail sent from the site
  mailSubject: "[Portfolio] Contact via tijmevervoort website",
  linkedin: "https://www.linkedin.com/in/tijme-vervoort-529406204",
  github: "https://github.com/GamingWithToimen",
  cv: "/cv/Tijme-Vervoort-CV.pdf",
} as const;

export type FeaturedKey = "crm" | "budgetapp" | "signature" | "dataDefence" | "portfolioSite";

/** Drawn (hatched) artwork shown in the device frame when there is no screenshot. */
export type ArtKind = "dashboard" | "target" | "devices";

export type Featured = {
  key: FeaturedKey;
  year: number;
  tags: string[];
  github?: string;
  /** Screenshot shown inside the laptop frame. */
  image?: string;
  /** Fallback artwork when there is no (public) screenshot, e.g. client work. */
  art?: ArtKind;
};

// Highlighted work; titles and descriptions are in dict.featured.items.
// The home page shows the first three.
export const featured: Featured[] = [
  {
    key: "crm",
    year: 2026,
    tags: ["C# / .NET 10", "Laravel", "REST APIs", "MySQL", "GitLab CI/CD"],
    // Test environment, every name and amount blurred
    image: "/images/crm-projecten.jpg",
  },
  {
    key: "budgetapp",
    year: 2026,
    tags: ["React", "TypeScript", "Node.js", "Open Banking (PSD2)", "Vitest"],
    github: "https://github.com/GamingWithToimen/budgetapp",
    // Empty start screen, no personal data
    image: "/images/budgetapp.jpg",
  },
  {
    key: "dataDefence",
    year: 2024,
    tags: ["C#", "Unity"],
    github: "https://github.com/GamingWithToimen/Data-Defence",
    art: "target",
  },
  {
    key: "signature",
    year: 2025,
    tags: ["HTML", "CSS", "Email clients"],
    github: "https://github.com/GamingWithToimen/siganture",
    image: "/images/bootstrap_email.png",
  },
  {
    key: "portfolioSite",
    year: 2026,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/GamingWithToimen/portfolio-website",
    art: "devices",
  },
];

export type StackKey = "backend" | "frontend" | "data" | "hardware" | "tooling" | "also";

// The "My stack" grid; group names are in dict.stack.groups
export const stack: { key: StackKey; items: string[] }[] = [
  { key: "backend", items: ["C#", ".NET 10", "Laravel", "REST APIs"] },
  { key: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { key: "data", items: ["MySQL", "Azure SQL"] },
  { key: "hardware", items: ["ESP32", "Unity"] },
  { key: "tooling", items: ["Git", "GitLab CI/CD", "GitHub", "Azure DevOps"] },
  { key: "also", items: ["Python", "Django", "Wagtail"] },
];

// Tech used during each internship (shown in the facts grid at the top)
export const bandItems = {
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
  page?: "internship-1" | "internship-2";
  /** Index into statValues / dict.stats for the headline result of this entry. */
  stat?: number;
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
    stat: 2,
  },
  {
    key: "omnilan",
    org: "Omnilan",
    kind: "internship",
    start: "2023-08",
    end: "2024-02",
    page: "internship-1",
    stat: 1,
  },
  {
    key: "kw1c",
    org: "Koning Willem I College",
    kind: "education",
    start: "2022-08",
    end: "2026-06",
  },
];

/** The internships, newest first (used for the cards and the "next internship" link). */
export const internships = timeline.filter(
  (t): t is TimelineEntry & { page: NonNullable<TimelineEntry["page"]> } => Boolean(t.page),
);

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
