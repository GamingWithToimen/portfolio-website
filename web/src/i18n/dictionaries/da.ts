import type { Dictionary } from "../types";

const da: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio for Tijme Vervoort, full stack-udvikler hos Innovaware, der bygger ERP-systemer i C#, TypeScript og React Native.",
  },
  nav: {
    home: "Hjem",
    portfolio: "Portfolio",
    internship1: "Praktik 1",
    internship2: "Praktik 2",
    language: "Sprog",
  },
  footer: { rights: "Alle rettigheder forbeholdes." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Jeg er",
    explore: "Udforsk nu",
    internships: "Praktikophold",
    aboutLabel: "Tijme",
    aboutTitle: "Om mig",
    selectedLabel: "Udvalg",
    projectsTitle: "Projekter",
    photoAlt: "Portræt af Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full Stack-udvikler hos Innovaware, bygger ERP-systemer i C# og TypeScript, med React Native til mobil.",
    bio1: "Jeg er 22 år og arbejder på fuld tid som full stack-udvikler hos Innovaware. Jeg er uddannet softwareudvikler (MBO niveau 4) fra KW1C i 's-Hertogenbosch, efter at jeg skiftede fra bygge- og anlægsuddannelsen. Nu bygger jeg ERP-systemer i C# med TypeScript samt en mobilapp i React Native.",
    bio2: "Under studiet havde jeg to praktikophold, hos Omnilan og hos AB Transport, hvor jeg arbejdede med Python og Django. Jeg byggede også en komplet hjemmeside til en idrætsklub og flere webprojekter. Min tidligere bygge- og anlægsuddannelse gav mig også praktisk projekterfaring: en restaurant med stålkonstruktion, en bolig fra 1930'erne og et fritidsanlæg for unge.",
  },
  work: {
    label: "Innovaware",
    title: "Arbejde",
    role: "Full Stack Developer",
    period: "Nuværende stilling",
    description:
      "Jeg bygger ERP-systemer i C# og TypeScript og udvikler den tilhørende mobilapp i React Native.",
    skillsLabel: "Teknologier",
  },
  stats: ["År gammel", "Praktikophold gennemført", "Nuværende fokus", "Sprog brugt"],
  portfolio: {
    label: "Tijme",
    title: "Portfolioprojekter",
    projects: [
      {
        title: "Regnbueprojektet",
        description:
          "Span-klasser og visuelt tiltalende layouts med CSS-positionering og farveskemaer til en regnbueeffekt.",
      },
      {
        title: "Kamptabel",
        description:
          "Fodboldkampe vist overskueligt med HTML-tabeller og CSS-styling.",
      },
      {
        title: "Tabeljustering med CSS",
        description:
          "En rodet HTML-fil forvandlet til en flot præsentation med målrettet CSS.",
      },
      {
        title: "Rowspan og colspan",
        description:
          "Eksperimenterede med rowspan og colspan for at bygge avancerede tabellayouts, stylet med CSS-klasser og ID'er.",
      },
    ],
  },
  internship1: {
    label: "Praktik 1",
    roleTitle: "Min rolle hos Omnilan",
    role: "Hos Omnilan arbejdede jeg som softwareudvikler og forbedrede interne systemer og kommunikationsværktøjer. Mine vigtigste opgaver var at udvikle og forbedre lysstyringssystemet og forenkle e-mailsystemet mellem medarbejderne.",
    sections: [
      {
        heading: "Udvikling af lyssystem",
        projects: [
          {
            title: "ISPConfig",
            description: "Hoveddashboardet i ISPConfig.",
          },
          {
            title: "Administration af e-maildomæner",
            description:
              "Oprettelse af e-maildomæner til adresser, der hører til hjemmesiden.",
          },
          {
            title: "Opsætning af e-mailadresser",
            description: "Oprettelse af e-mailadresser til hjemmesidens domæne.",
          },
        ],
      },
      {
        heading: "Forbedring af e-mailsystemet",
        projects: [
          {
            title: "Rememberz",
            description: "Hovednavigationen for Rememberz-brugere.",
          },
          {
            title: "Milight-styringssystem",
            description:
              "Brugerindstillinger til lysstyring, herunder farvejustering.",
          },
          {
            title: "Rememberz' hovedgrænseflade",
            description: "Det centrale navigationspunkt i Rememberz-platformen.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Praktik 2",
    subtitle: "Webudvikling og online læring",
    roleTitle: "Min rolle hos AB Transport",
    role: "Hos AB Transport arbejdede jeg som softwareudvikler i it-afdelingen og forbedrede virksomhedens e-mailsystemer og deres udseende. Jeg byggede flottere e-mailskabeloner og grænseflader og brugte tid på strukturerede onlinekurser for at blive bedre til Python, webframeworks og e-maildesign.",
    sections: [
      {
        heading: "Webudvikling og CMS-projekter",
        projects: [
          {
            title: "Udvikling med Wagtail CMS",
            description:
              "Udforskede Wagtail CMS gennem strukturerede onlinekurser for at bygge dynamiske indholdssystemer.",
          },
          {
            title: "Indholdsstyringssystemer",
            description:
              "Byggede interaktive blogs med FAQ-sektioner og dynamiske karruseller.",
          },
        ],
      },
      {
        heading: "Forbedring af e-mailsystemet",
        projects: [
          {
            title: "Bootstrap-e-mailskabeloner",
            description:
              "Designede responsive e-mailsignaturer og layouts med Bootstrap Email til AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsfærdigheder",
        projects: [
          {
            title: "Programmeringsdiscipliner",
            description:
              "Udforskede Python, JavaScript, HTML og CSS, SQL og mere gennem strukturerede onlineprogrammer.",
          },
          {
            title: "Python-kurser på Codecademy",
            description:
              "Gennemførte Python-kurser på mellem- og avanceret niveau samt webudvikling med Django.",
          },
        ],
      },
    ],
  },
};

export default da;
