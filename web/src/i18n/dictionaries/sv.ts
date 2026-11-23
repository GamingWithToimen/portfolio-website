import type { Dictionary } from "../types";

const sv: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio för Tijme Vervoort, fullstackutvecklare på Innovaware som bygger ERP-system i C#, TypeScript och React Native.",
  },
  nav: {
    home: "Hem",
    portfolio: "Portfolio",
    internship1: "Praktik 1",
    internship2: "Praktik 2",
    language: "Språk",
  },
  footer: { rights: "Alla rättigheter förbehållna." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Jag är",
    explore: "Utforska nu",
    internships: "Praktikplatser",
    aboutLabel: "Tijme",
    aboutTitle: "Om mig",
    selectedLabel: "Urval",
    projectsTitle: "Projekt",
    photoAlt: "Porträtt av Tijme Vervoort",
  },
  profile: {
    tagline:
      "Fullstackutvecklare på Innovaware, bygger ERP-system i C# och TypeScript, med React Native för mobil.",
    bio1: "Jag är 22 år och arbetar heltid som fullstackutvecklare på Innovaware. Jag har tagit examen som mjukvaruutvecklare (MBO nivå 4) på KW1C i 's-Hertogenbosch, efter att ha bytt från byggutbildningen. Nu bygger jag ERP-system i C# med TypeScript, plus en mobilapp i React Native.",
    bio2: "Under studierna gjorde jag två praktikperioder, hos Omnilan och hos AB Transport, där jag arbetade med Python och Django. Jag byggde också en komplett webbplats för en idrottsklubb och flera webbprojekt. Min tidigare byggutbildning gav mig också praktisk projekterfarenhet: en restaurang med stålstomme, ett bostadshus från 1930-talet och en fritidsanläggning för ungdomar.",
  },
  work: {
    label: "Innovaware",
    title: "Arbete",
    role: "Full Stack Developer",
    period: "Nuvarande tjänst",
    description:
      "Jag bygger ERP-system i C# och TypeScript och utvecklar den tillhörande mobilappen i React Native.",
    skillsLabel: "Teknologier",
  },
  stats: ["År gammal", "Praktikperioder klara", "Nuvarande fokus", "Språk i bruk"],
  portfolio: {
    label: "Tijme",
    title: "Portfolioprojekt",
    projects: [
      {
        title: "Regnbågsprojektet",
        description:
          "Span-klasser och visuellt tilltalande layouter, med CSS-positionering och färgscheman för en regnbågseffekt.",
      },
      {
        title: "Matchtabell",
        description:
          "Fotbollsmatcher presenterade överskådligt med HTML-tabeller och CSS-stil.",
      },
      {
        title: "Tabelljustering med CSS",
        description:
          "En rörig HTML-fil förvandlad till en snygg presentation med målinriktad CSS.",
      },
      {
        title: "Rowspan och colspan",
        description:
          "Experimenterade med rowspan och colspan för att bygga avancerade tabelllayouter, stylade med CSS-klasser och ID:n.",
      },
    ],
  },
  internship1: {
    label: "Praktik 1",
    roleTitle: "Min roll hos Omnilan",
    role: "Hos Omnilan arbetade jag som mjukvaruutvecklare och förbättrade interna system och kommunikationsverktyg. Mina huvuduppgifter var att utveckla och förbättra ljusstyrningssystemet och förenkla e-postsystemet mellan de anställda.",
    sections: [
      {
        heading: "Utveckling av ljussystem",
        projects: [
          {
            title: "ISPConfig",
            description: "Huvudpanelen i ISPConfig.",
          },
          {
            title: "Hantering av e-postdomäner",
            description:
              "Skapa e-postdomäner för adresser som hör till webbplatsen.",
          },
          {
            title: "Konfiguration av e-postadresser",
            description: "Skapa e-postadresser för webbplatsens domän.",
          },
        ],
      },
      {
        heading: "Förbättring av e-postsystemet",
        projects: [
          {
            title: "Rememberz",
            description: "Huvudnavigeringen för Rememberz-användare.",
          },
          {
            title: "Milight-styrsystem",
            description:
              "Användarinställningar för ljusstyrning, inklusive färgjustering.",
          },
          {
            title: "Rememberz huvudgränssnitt",
            description: "Den centrala navigeringspunkten i Rememberz-plattformen.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Praktik 2",
    subtitle: "Webbutveckling och nätbaserat lärande",
    roleTitle: "Min roll hos AB Transport",
    role: "Hos AB Transport arbetade jag som mjukvaruutvecklare på IT-avdelningen och förbättrade företagets e-postsystem och hur de ser ut. Jag byggde snyggare e-postmallar och gränssnitt och lade tid på strukturerade nätkurser för att bli bättre på Python, webbramverk och e-postdesign.",
    sections: [
      {
        heading: "Webbutveckling och CMS-projekt",
        projects: [
          {
            title: "Utveckling med Wagtail CMS",
            description:
              "Utforskade Wagtail CMS genom strukturerade nätkurser för att bygga dynamiska innehållssystem.",
          },
          {
            title: "Innehållshanteringssystem",
            description:
              "Byggde interaktiva bloggar med FAQ-sektioner och dynamiska karuseller.",
          },
        ],
      },
      {
        heading: "Förbättring av e-postsystemet",
        projects: [
          {
            title: "Bootstrap-e-postmallar",
            description:
              "Utformade responsiva e-postsignaturer och layouter med Bootstrap Email för AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsfärdigheter",
        projects: [
          {
            title: "Programmeringsdiscipliner",
            description:
              "Utforskade Python, JavaScript, HTML och CSS, SQL och mer genom strukturerade nätprogram.",
          },
          {
            title: "Python-kurser på Codecademy",
            description:
              "Genomförde Python-kurser på mellannivå och avancerad nivå, plus webbutveckling med Django.",
          },
        ],
      },
    ],
  },
};

export default sv;
