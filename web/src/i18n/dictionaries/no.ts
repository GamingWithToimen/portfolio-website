import type { Dictionary } from "../types";

const no: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portefølje",
    description: "Portefølje for Tijme Vervoort, junior fullstack-utvikler hos Innovaware som bygger CRM-systemer i C# (.NET 10) og Laravel med et React / Next.js-grensesnitt.",
  },
  nav: {
    home: "Hjem",
    portfolio: "Portefølje",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Språk",
    work: "Arbeid",
    about: "Om meg",
    stack: "Stack",
    backHome: "Tilbake til forsiden",
    allProjects: "Alle prosjekter",
    nextInternship: "Neste praksis",
  },
  footer: {
    rights: "Alle rettigheter forbeholdt.",
    builtWith: "Bygget med C#, kaffe og nysgjerrighet",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Jeg er",
    explore: "Utforsk nå",
    internships: "Praksisplasser",
    aboutLabel: "Profil",
    aboutTitle: "Om meg",
    selectedLabel: "Utvalgt",
    projectsTitle: "Prosjekter",
    photoAlt: "Portrett av Tijme Vervoort",
    terminalWho: "utvikler, bygger, gamer",
    terminalStatus: "bygger CRM-er @ Innovaware",
  },
  stack: {
    label: "Min",
    title: "Stack",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      hardware: "Maskinvare og spill",
      tooling: "Verktøy",
      also: "Også",
    },
  },
  internshipMeta: {
    role: "Rolle",
    stack: "Stack",
    result: "Resultat",
  },
  profile: {
    tagline: "Junior fullstack-utvikler hos Innovaware, bygger CRM-systemer i C# (.NET 10) og Laravel, med React / Next.js i frontend.",
    bio1: "Jeg er 22 år og jobber fulltid som junior fullstack-utvikler hos Innovaware. Jeg er ferdig utdannet programvareutvikler (MBO nivå 4) ved KW1C i 's-Hertogenbosch, etter at jeg byttet fra byggfag. Nå bygger jeg CRM-systemer i C# (.NET 10) og Laravel, med REST-API-er mot et React / Next.js-grensesnitt.",
    bio2: "Under studiene hadde jeg to C#-praksisplasser. Hos Omnilan skrev jeg programvare for ESP32-enheter som styrer lys fra et dashbord; hos AB Transport gjorde jeg databasespørringer raskere og bygde en oversikt for ansatte i C#, Python og Django. Jeg har også laget Data-Defence (et spill i C# og Unity), en nettside for en idrettsklubb og denne porteføljen.",
  },
  work: {
    label: "Innovaware",
    title: "Arbeid",
    role: "Junior Full-Stack Developer",
    period: "Nåværende stilling",
    description: "Jeg bygger CRM-systemer for små og mellomstore bedrifter i C# (.NET 10) og Laravel, med REST-API-er som kobler backend til et React / Next.js-grensesnitt.",
    skillsLabel: "Teknologier",
  },
  stats: [
    "funksjoner levert hos Innovaware",
    "feil rettet hos Omnilan",
    "raskere spørringer hos AB Transport",
    "C#-praksisplasser fullført",
  ],
  timeline: {
    label: "Karriere",
    title: "Tidslinje",
    present: "Nå",
    more: "Se praksis hos {org}",
    kinds: {
      work: "Jobb",
      internship: "Praksis",
      education: "Utdanning",
    },
    items: {
      innovaware: {
        role: "Junior fullstack-utvikler",
        description: "Jeg bygger CRM-systemer for små og mellomstore bedrifter i C# (.NET 10) og Laravel, med REST-API-er mot et React / Next.js-grensesnitt, GitLab CI/CD-pipelines og en AI-helpdeskintegrasjon.",
      },
      abTransport: {
        role: "Praktikant innen programvareutvikling",
        description: "Optimaliserte databasespørringene bak en rapportside, omtrent 2–5 ganger raskere, og bygde en ny oversikt for ansatte i C#, Python og Django.",
      },
      omnilan: {
        role: "Praktikant innen programvareutvikling",
        description: "Skrev C#-programvare for ESP32-enheter som lar brukere slå på lyset i et rom fra en knapp på et dashbord, og fikset 30 feil i eksisterende kode.",
      },
      kw1c: {
        role: "Software Developer (MBO nivå 4)",
        description: "Fullførte utdanningen som programvareutvikler i 's-Hertogenbosch og tok vitnemål, med Azure DevOps og Azure SQL i skoleprosjekter.",
      },
    },
  },
  contact: {
    label: "Kontakt",
    title: "La oss snakke",
    text: "Leter du etter en junior .NET- eller fullstack-utvikler? Send meg en e-post eller koble deg til meg på LinkedIn.",
    email: "Send e-post",
    cv: "Last ned CV",
    cta: "Ta kontakt",
    location: "Nistelrode · Uden-Veghel-regionen · nederlandsk og engelsk (B2)",
  },
  featured: {
    github: "Se på GitHub",
    private: "Kundeprosjekt · koden er ikke offentlig",
    items: {
      crm: {
        title: "CRM-systemer hos Innovaware",
        description: "Backend-funksjoner for CRM-systemer til små og mellomstore bedrifter: C# (.NET 10), Laravel, REST-API-er, MySQL, GitLab CI/CD og en AI-helpdeskintegrasjon.",
      },
      signature: {
        title: "E-postsignatur for AB Transport",
        description: "Responsiv HTML-e-postsignatur for AB Transport og AB Solutions, med begge merkevarene, kontaktinformasjon og lenker til sosiale medier. Testet i Gmail, Outlook, Apple Mail og mobile e-postapper.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "Et spill i C# og Unity: finn infiltratøren i et papirfirma, håndter hendelser som branner og si opp ansatte som skaper problemer.",
      },
      portfolioSite: {
        title: "Denne porteføljen",
        description: "Bygget med Next.js, React, TypeScript og Tailwind CSS, på ti språk. Den første versjonen laget jeg i Python og Django.",
      },
    },
  },
  portfolio: {
    label: "Utdanning",
    title: "Porteføljeprosjekter",
    exercisesTitle: "Skoleoppgaver",
    intro: "Kundearbeid, praksisarbeid og egne prosjekter. For hvert prosjekt står det hva det gjør, hva det er bygget med og hvor du kan se koden.",
    exercisesSubtitle: "Oppgaver fra Koning Willem I College",
    projects: [
      {
        title: "Regnbueprosjektet",
        description: "Span-klasser og visuelt tiltalende oppsett, med CSS-posisjonering og fargevalg for å lage en regnbueeffekt.",
      },
      {
        title: "Kamptabell",
        description: "Fotballkamper presentert oversiktlig med HTML-tabeller og CSS-styling.",
      },
      {
        title: "Tabelljustering med CSS",
        description: "En rotete HTML-fil gjort om til en pen presentasjon med målrettet CSS.",
      },
      {
        title: "Rowspan og colspan",
        description: "Eksperimenterte med rowspan og colspan for å lage avanserte tabelloppsett, stilt med CSS-klasser og ID-er.",
      },
    ],
  },
  internship1: {
    label: "Praksis 1",
    roleTitle: "Min rolle hos Omnilan",
    role: "Hos Omnilan jobbet jeg som programvareutvikler og forbedret interne systemer og kommunikasjonsverktøy. Hovedoppgavene mine var å utvikle og forbedre lysstyringssystemet og forenkle e-postsystemet mellom de ansatte.",
    sections: [
      {
        heading: "Forbedring av e-postsystemet",
        projects: [
          {
            title: "ISPConfig",
            description: "Hoveddashbordet i ISPConfig.",
          },
          {
            title: "Administrasjon av e-postdomener",
            description: "Opprette e-postdomener for adresser som hører til nettsiden.",
          },
          {
            title: "Oppsett av e-postadresser",
            description: "Opprette e-postadresser for nettsidens domene.",
          },
        ],
      },
      {
        heading: "Utvikling av lyssystem",
        projects: [
          {
            title: "Rememberz",
            description: "Hovednavigasjonen for Rememberz-brukere.",
          },
          {
            title: "Milight-styringssystem",
            description: "Brukerinnstillinger for lysstyring, inkludert fargejustering.",
          },
          {
            title: "Rememberz hovedgrensesnitt",
            description: "Det sentrale navigasjonspunktet i Rememberz-plattformen.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Praksis 2",
    subtitle: "Webutvikling og nettbasert læring",
    roleTitle: "Min rolle hos AB Transport",
    role: "Hos AB Transport hadde jeg praksis som programvareutvikler i IT-avdelingen. Jeg optimaliserte databasespørringene bak en rapportside, omtrent 2–5 ganger raskere, bygde en ny oversikt for ansatte i C#, Python og Django og forbedret selskapets e-postmaler. Oppgaver og kode ble styrt i Azure DevOps.",
    sections: [
      {
        heading: "Webutvikling og CMS-prosjekter",
        projects: [
          {
            title: "Utvikling med Wagtail CMS",
            description: "Utforsket Wagtail CMS gjennom strukturerte nettkurs for å bygge dynamiske innholdssystemer.",
          },
          {
            title: "Innholdsstyringssystemer",
            description: "Bygde interaktive blogger med FAQ-seksjoner og dynamiske karuseller.",
          },
        ],
      },
      {
        heading: "Forbedring av e-postsystemet",
        projects: [
          {
            title: "Bootstrap-e-postmaler",
            description: "Utformet responsive e-postsignaturer og oppsett med Bootstrap Email for AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsferdigheter",
        projects: [
          {
            title: "Programmeringsdisipliner",
            description: "Utforsket Python, JavaScript, HTML og CSS, SQL og mer gjennom strukturerte nettprogrammer.",
          },
          {
            title: "Python-kurs på Codecademy",
            description: "Fullførte Python-kurs på middels og avansert nivå, pluss webutvikling med Django.",
          },
        ],
      },
    ],
  },
};

export default no;
