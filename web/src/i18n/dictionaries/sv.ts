import type { Dictionary } from "../types";

const sv: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio för Tijme Vervoort, junior fullstackutvecklare på Innovaware som bygger CRM-system i C# (.NET 10) och Laravel med ett React / Next.js-gränssnitt.",
  },
  nav: {
    home: "Hem",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Språk",
    work: "Arbete",
    about: "Om mig",
    stack: "Stack",
    backHome: "Tillbaka till startsidan",
    allProjects: "Alla projekt",
    nextInternship: "Nästa praktik",
  },
  footer: {
    rights: "Alla rättigheter förbehållna.",
    builtWith: "Byggd med C#, kaffe och nyfikenhet",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Jag är",
    explore: "Utforska nu",
    internships: "Praktikplatser",
    aboutLabel: "Profil",
    aboutTitle: "Om mig",
    selectedLabel: "Utvalt",
    projectsTitle: "Projekt",
    photoAlt: "Porträtt av Tijme Vervoort",
    terminalWho: "utvecklare, byggare, gamer",
    terminalStatus: "bygger CRM-system @ Innovaware",
  },
  stack: {
    label: "Min",
    title: "Stack",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      hardware: "Hårdvara och spel",
      tooling: "Verktyg",
      also: "Även",
    },
  },
  internshipMeta: {
    role: "Roll",
    stack: "Stack",
    result: "Resultat",
  },
  profile: {
    tagline: "Junior fullstackutvecklare på Innovaware, bygger CRM-system i C# (.NET 10) och Laravel, med React / Next.js i frontend.",
    bio1: "Jag är 22 år och arbetar heltid som junior fullstackutvecklare på Innovaware. Jag har tagit examen som mjukvaruutvecklare (MBO nivå 4) på KW1C i 's-Hertogenbosch, efter att ha bytt från byggutbildningen. Nu bygger jag CRM-system i C# (.NET 10) och Laravel, med REST-API:er mot ett React / Next.js-gränssnitt.",
    bio2: "Under studierna gjorde jag två C#-praktiker. På Omnilan skrev jag mjukvara för ESP32-enheter som styr belysning från en instrumentpanel; på AB Transport gjorde jag databasfrågor snabbare och byggde en översikt för personalen i C#, Python och Django. Jag har också byggt Data-Defence (ett spel i C# och Unity), en webbplats för en idrottsklubb och den här portfolion.",
  },
  work: {
    label: "Innovaware",
    title: "Arbete",
    role: "Junior Full-Stack Developer",
    period: "Nuvarande tjänst",
    description: "Jag bygger CRM-system för små och medelstora företag i C# (.NET 10) och Laravel, med REST-API:er som kopplar backend till ett React / Next.js-gränssnitt.",
    skillsLabel: "Teknologier",
  },
  stats: [
    "funktioner levererade på Innovaware",
    "problem åtgärdade på Omnilan",
    "snabbare frågor på AB Transport",
    "C#-praktiker genomförda",
  ],
  timeline: {
    label: "Karriär",
    title: "Tidslinje",
    present: "Nu",
    more: "Se praktik på {org}",
    kinds: {
      work: "Arbete",
      internship: "Praktik",
      education: "Utbildning",
    },
    items: {
      innovaware: {
        role: "Junior fullstackutvecklare",
        description: "Jag bygger CRM-system för små och medelstora företag i C# (.NET 10) och Laravel, med REST-API:er mot ett React / Next.js-gränssnitt, GitLab CI/CD-pipelines och en AI-helpdeskintegration.",
      },
      abTransport: {
        role: "Praktikant inom mjukvaruutveckling",
        description: "Optimerade databasfrågorna bakom en rapportsida, ungefär 2–5 gånger snabbare, och byggde en ny översikt för personalen i C#, Python och Django.",
      },
      omnilan: {
        role: "Praktikant inom mjukvaruutveckling",
        description: "Skrev C#-mjukvara för ESP32-enheter som låter användare tända belysningen i ett rum från en knapp på en instrumentpanel, och åtgärdade 30 problem i befintlig kod.",
      },
      kw1c: {
        role: "Software Developer (MBO nivå 4)",
        description: "Slutförde utbildningen till mjukvaruutvecklare i 's-Hertogenbosch och tog examen, med Azure DevOps och Azure SQL i skolprojekt.",
      },
    },
  },
  contact: {
    label: "Kontakt",
    title: "Hör av dig",
    text: "Letar du efter en junior .NET- eller fullstackutvecklare? Skicka ett mejl eller kontakta mig på LinkedIn.",
    email: "Mejla mig",
    cv: "Ladda ner CV",
    cta: "Kontakta mig",
    location: "Nistelrode · Uden-Veghel-regionen · nederländska och engelska (B2)",
  },
  featured: {
    github: "Visa på GitHub",
    private: "Kunduppdrag · koden är inte offentlig",
    items: {
      crm: {
        title: "CRM-system på Innovaware",
        description: "Backendfunktioner för CRM-system till små och medelstora företag: C# (.NET 10), Laravel, REST-API:er, MySQL, GitLab CI/CD och en AI-helpdeskintegration.",
      },
      budgetapp: {
        title: "Budgetapp med bankkoppling",
        description: "Månadsbudget-app ombyggd från en enda HTML-fil till React och TypeScript, med en liten Node.js-server. Den kopplar Rabobank och SpareBank 1 via Open Banking (PSD2) för att hålla fasta kostnader uppdaterade, på tre språk och med över 100 automatiska tester.",
      },
      signature: {
        title: "E-postsignatur för AB Transport",
        description: "Responsiv HTML-e-postsignatur för AB Transport och AB Solutions, med båda varumärkena, kontaktuppgifter och länkar till sociala medier. Testad i Gmail, Outlook, Apple Mail och mobila e-postappar.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "Ett spel i C# och Unity: hitta infiltratören på ett pappersföretag, hantera incidenter som bränder och säg upp anställda som ställer till problem.",
      },
      portfolioSite: {
        title: "Den här portfolion",
        description: "Byggd med Next.js, React, TypeScript och Tailwind CSS, på tio språk. Den första versionen gjorde jag i Python och Django.",
      },
    },
  },
  portfolio: {
    label: "Utbildning",
    title: "Portfolioprojekt",
    exercisesTitle: "Skoluppgifter",
    intro: "Kunduppdrag, praktikarbete och egna projekt. För varje projekt står vad det gör, vad det är byggt med och var du kan se koden.",
    exercisesSubtitle: "Uppgifter från Koning Willem I College",
    projects: [
      {
        title: "Regnbågsprojektet",
        description: "Span-klasser och visuellt tilltalande layouter, med CSS-positionering och färgscheman för en regnbågseffekt.",
      },
      {
        title: "Matchtabell",
        description: "Fotbollsmatcher presenterade överskådligt med HTML-tabeller och CSS-stil.",
      },
      {
        title: "Tabelljustering med CSS",
        description: "En rörig HTML-fil förvandlad till en snygg presentation med målinriktad CSS.",
      },
      {
        title: "Rowspan och colspan",
        description: "Experimenterade med rowspan och colspan för att bygga avancerade tabelllayouter, stylade med CSS-klasser och ID:n.",
      },
    ],
  },
  internship1: {
    label: "Praktik 1",
    roleTitle: "Min roll hos Omnilan",
    role: "Hos Omnilan arbetade jag som mjukvaruutvecklare och förbättrade interna system och kommunikationsverktyg. Mina huvuduppgifter var att utveckla och förbättra ljusstyrningssystemet och förenkla e-postsystemet mellan de anställda.",
    sections: [
      {
        heading: "Förbättring av e-postsystemet",
        projects: [
          {
            title: "ISPConfig",
            description: "Huvudpanelen i ISPConfig.",
          },
          {
            title: "Hantering av e-postdomäner",
            description: "Skapa e-postdomäner för adresser som hör till webbplatsen.",
          },
          {
            title: "Konfiguration av e-postadresser",
            description: "Skapa e-postadresser för webbplatsens domän.",
          },
        ],
      },
      {
        heading: "Utveckling av ljussystem",
        projects: [
          {
            title: "Rememberz",
            description: "Huvudnavigeringen för Rememberz-användare.",
          },
          {
            title: "Milight-styrsystem",
            description: "Användarinställningar för ljusstyrning, inklusive färgjustering.",
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
    role: "På AB Transport gjorde jag praktik som mjukvaruutvecklare på IT-avdelningen. Jag optimerade databasfrågorna bakom en rapportsida, ungefär 2–5 gånger snabbare, byggde en ny översikt för personalen i C#, Python och Django och förbättrade företagets e-postmallar. Uppgifter och kod hanterades i Azure DevOps.",
    sections: [
      {
        heading: "Webbutveckling och CMS-projekt",
        projects: [
          {
            title: "Utveckling med Wagtail CMS",
            description: "Utforskade Wagtail CMS genom strukturerade nätkurser för att bygga dynamiska innehållssystem.",
          },
          {
            title: "Innehållshanteringssystem",
            description: "Byggde interaktiva bloggar med FAQ-sektioner och dynamiska karuseller.",
          },
        ],
      },
      {
        heading: "Förbättring av e-postsystemet",
        projects: [
          {
            title: "Bootstrap-e-postmallar",
            description: "Utformade responsiva e-postsignaturer och layouter med Bootstrap Email för AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsfärdigheter",
        projects: [
          {
            title: "Programmeringsdiscipliner",
            description: "Utforskade Python, JavaScript, HTML och CSS, SQL och mer genom strukturerade nätprogram.",
          },
          {
            title: "Python-kurser på Codecademy",
            description: "Genomförde Python-kurser på mellannivå och avancerad nivå, plus webbutveckling med Django.",
          },
        ],
      },
    ],
  },
};

export default sv;
