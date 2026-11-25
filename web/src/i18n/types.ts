export type ProjectText = { title: string; description: string };
export type SectionText = { heading: string; projects: ProjectText[] };

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    portfolio: string;
    internship1: string;
    internship2: string;
    language: string;
  };
  footer: { rights: string };
  home: {
    eyebrow: string;
    iAm: string;
    explore: string;
    internships: string;
    aboutLabel: string;
    aboutTitle: string;
    selectedLabel: string;
    projectsTitle: string;
    photoAlt: string;
  };
  profile: { tagline: string; bio1: string; bio2: string };
  work: {
    label: string;
    title: string;
    role: string;
    period: string;
    description: string;
    skillsLabel: string;
  };
  /** Labels for the four stats; the values live in data/media.ts. */
  stats: [string, string, string, string];
  /** Career timeline; dates and organisation names live in data/media.ts. */
  timeline: {
    label: string;
    title: string;
    present: string;
    more: string;
    kinds: { work: string; internship: string; education: string };
    items: Record<
      "innovaware" | "abTransport" | "omnilan" | "kw1c",
      { role: string; description: string }
    >;
  };
  contact: {
    label: string;
    title: string;
    text: string;
    email: string;
    cv: string;
    cta: string;
  };
  /** Highlighted work; links and tags live in data/media.ts. */
  featured: {
    github: string;
    private: string;
    items: Record<
      "dataDefence" | "crm" | "portfolioSite",
      { title: string; description: string }
    >;
  };
  portfolio: {
    label: string;
    title: string;
    exercisesTitle: string;
    projects: ProjectText[];
  };
  internship1: {
    label: string;
    roleTitle: string;
    role: string;
    sections: SectionText[];
  };
  internship2: {
    label: string;
    subtitle: string;
    roleTitle: string;
    role: string;
    sections: SectionText[];
  };
};
