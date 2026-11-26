import type { Dictionary } from "../types";

const da: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio for Tijme Vervoort, junior full stack-udvikler hos Innovaware, der bygger CRM-systemer i C# (.NET 10) og Laravel med en React / Next.js-frontend.",
  },
  nav: {
    home: "Hjem",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Sprog",
    work: "Arbejde",
    about: "Om mig",
    stack: "Stack",
    backHome: "Tilbage til forsiden",
    allProjects: "Alle projekter",
    nextInternship: "Næste praktik",
  },
  footer: {
    rights: "Alle rettigheder forbeholdes.",
    builtWith: "Bygget med C#, kaffe og nysgerrighed",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Jeg er",
    explore: "Udforsk nu",
    internships: "Praktikophold",
    aboutLabel: "Profil",
    aboutTitle: "Om mig",
    selectedLabel: "Udvalgt",
    projectsTitle: "Projekter",
    photoAlt: "Portræt af Tijme Vervoort",
    terminalWho: "udvikler, bygger, gamer",
    terminalStatus: "bygger CRM-systemer @ Innovaware",
  },
  stack: {
    label: "Min",
    title: "Stack",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      hardware: "Hardware og spil",
      tooling: "Værktøjer",
      also: "Også",
    },
  },
  internshipMeta: {
    role: "Rolle",
    stack: "Stack",
    result: "Resultat",
  },
  profile: {
    tagline: "Junior full stack-udvikler hos Innovaware, bygger CRM-systemer i C# (.NET 10) og Laravel, med React / Next.js i frontend.",
    bio1: "Jeg er 22 år og arbejder på fuld tid som junior full stack-udvikler hos Innovaware. Jeg er uddannet softwareudvikler (MBO niveau 4) fra KW1C i 's-Hertogenbosch, efter at jeg skiftede fra bygge- og anlægsuddannelsen. Nu bygger jeg CRM-systemer i C# (.NET 10) og Laravel, med REST-API'er til en React / Next.js-frontend.",
    bio2: "Under studiet havde jeg to C#-praktikophold. Hos Omnilan skrev jeg software til ESP32-enheder, der styrer lys fra et dashboard; hos AB Transport gjorde jeg databaseforespørgsler hurtigere og byggede en oversigt til medarbejderne i C#, Python og Django. Jeg har også lavet Data-Defence (et spil i C# og Unity), en hjemmeside til en sportsklub og denne portfolio.",
  },
  work: {
    label: "Innovaware",
    title: "Arbejde",
    role: "Junior Full-Stack Developer",
    period: "Nuværende stilling",
    description: "Jeg bygger CRM-systemer til små og mellemstore virksomheder i C# (.NET 10) og Laravel, med REST-API'er, der forbinder backend med en React / Next.js-frontend.",
    skillsLabel: "Teknologier",
  },
  stats: [
    "funktioner leveret hos Innovaware",
    "fejl rettet hos Omnilan",
    "hurtigere forespørgsler hos AB Transport",
    "C#-praktikophold gennemført",
  ],
  timeline: {
    label: "Karriere",
    title: "Tidslinje",
    present: "Nu",
    more: "Se praktik hos {org}",
    kinds: {
      work: "Arbejde",
      internship: "Praktik",
      education: "Uddannelse",
    },
    items: {
      innovaware: {
        role: "Junior full stack-udvikler",
        description: "Jeg bygger CRM-systemer til små og mellemstore virksomheder i C# (.NET 10) og Laravel, med REST-API'er til en React / Next.js-frontend, GitLab CI/CD-pipelines og en AI-helpdeskintegration.",
      },
      abTransport: {
        role: "Praktikant i softwareudvikling",
        description: "Optimerede databaseforespørgslerne bag en rapportside, cirka 2–5 gange hurtigere, og byggede en ny oversigt til medarbejderne i C#, Python og Django.",
      },
      omnilan: {
        role: "Praktikant i softwareudvikling",
        description: "Skrev C#-software til ESP32-enheder, så brugere kan tænde lyset i et rum fra en knap på et dashboard, og rettede 30 fejl i eksisterende kode.",
      },
      kw1c: {
        role: "Software Developer (MBO niveau 4)",
        description: "Gennemførte uddannelsen som softwareudvikler i 's-Hertogenbosch og fik mit eksamensbevis, med Azure DevOps og Azure SQL i skoleprojekter.",
      },
    },
  },
  contact: {
    label: "Kontakt",
    title: "Lad os tale sammen",
    text: "Leder du efter en junior .NET- eller full stack-udvikler? Send mig en e-mail eller forbind dig med mig på LinkedIn.",
    email: "Skriv til mig",
    cv: "Download CV",
    cta: "Kontakt mig",
    location: "Nistelrode · Uden-Veghel-regionen · nederlandsk og engelsk (B2)",
  },
  featured: {
    github: "Se på GitHub",
    private: "Kundeprojekt · koden er ikke offentlig",
    items: {
      crm: {
        title: "CRM-systemer hos Innovaware",
        description: "Backend-funktioner til CRM-systemer for små og mellemstore virksomheder: C# (.NET 10), Laravel, REST-API'er, MySQL, GitLab CI/CD og en AI-helpdeskintegration.",
      },
      signature: {
        title: "E-mailsignatur til AB Transport",
        description: "Responsiv HTML-e-mailsignatur til AB Transport og AB Solutions med begge brands, kontaktoplysninger og links til sociale medier. Testet i Gmail, Outlook, Apple Mail og mobile mailapps.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "Et spil i C# og Unity: find infiltratoren i et papirfirma, håndter hændelser som brande og afskedig medarbejdere, der skaber problemer.",
      },
      portfolioSite: {
        title: "Denne portfolio",
        description: "Bygget med Next.js, React, TypeScript og Tailwind CSS, på ti sprog. Den første version lavede jeg i Python og Django.",
      },
    },
  },
  portfolio: {
    label: "Uddannelse",
    title: "Portfolioprojekter",
    exercisesTitle: "Skoleopgaver",
    intro: "Kundearbejde, praktikarbejde og egne projekter. Ved hvert projekt står, hvad det gør, hvad det er bygget med, og hvor du kan se koden.",
    exercisesSubtitle: "Opgaver fra Koning Willem I College",
    projects: [
      {
        title: "Regnbueprojektet",
        description: "Span-klasser og visuelt tiltalende layouts med CSS-positionering og farveskemaer til en regnbueeffekt.",
      },
      {
        title: "Kamptabel",
        description: "Fodboldkampe vist overskueligt med HTML-tabeller og CSS-styling.",
      },
      {
        title: "Tabeljustering med CSS",
        description: "En rodet HTML-fil forvandlet til en flot præsentation med målrettet CSS.",
      },
      {
        title: "Rowspan og colspan",
        description: "Eksperimenterede med rowspan og colspan for at bygge avancerede tabellayouts, stylet med CSS-klasser og ID'er.",
      },
    ],
  },
  internship1: {
    label: "Praktik 1",
    roleTitle: "Min rolle hos Omnilan",
    role: "Hos Omnilan arbejdede jeg som softwareudvikler og forbedrede interne systemer og kommunikationsværktøjer. Mine vigtigste opgaver var at udvikle og forbedre lysstyringssystemet og forenkle e-mailsystemet mellem medarbejderne.",
    sections: [
      {
        heading: "Forbedring af e-mailsystemet",
        projects: [
          {
            title: "ISPConfig",
            description: "Hoveddashboardet i ISPConfig.",
          },
          {
            title: "Administration af e-maildomæner",
            description: "Oprettelse af e-maildomæner til adresser, der hører til hjemmesiden.",
          },
          {
            title: "Opsætning af e-mailadresser",
            description: "Oprettelse af e-mailadresser til hjemmesidens domæne.",
          },
        ],
      },
      {
        heading: "Udvikling af lyssystem",
        projects: [
          {
            title: "Rememberz",
            description: "Hovednavigationen for Rememberz-brugere.",
          },
          {
            title: "Milight-styringssystem",
            description: "Brugerindstillinger til lysstyring, herunder farvejustering.",
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
    role: "Hos AB Transport var jeg i praktik som softwareudvikler i IT-afdelingen. Jeg optimerede databaseforespørgslerne bag en rapportside, cirka 2–5 gange hurtigere, byggede en ny oversigt til medarbejderne i C#, Python og Django og forbedrede virksomhedens e-mailskabeloner. Opgaver og kode blev styret i Azure DevOps.",
    sections: [
      {
        heading: "Webudvikling og CMS-projekter",
        projects: [
          {
            title: "Udvikling med Wagtail CMS",
            description: "Udforskede Wagtail CMS gennem strukturerede onlinekurser for at bygge dynamiske indholdssystemer.",
          },
          {
            title: "Indholdsstyringssystemer",
            description: "Byggede interaktive blogs med FAQ-sektioner og dynamiske karruseller.",
          },
        ],
      },
      {
        heading: "Forbedring af e-mailsystemet",
        projects: [
          {
            title: "Bootstrap-e-mailskabeloner",
            description: "Designede responsive e-mailsignaturer og layouts med Bootstrap Email til AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsfærdigheder",
        projects: [
          {
            title: "Programmeringsdiscipliner",
            description: "Udforskede Python, JavaScript, HTML og CSS, SQL og mere gennem strukturerede onlineprogrammer.",
          },
          {
            title: "Python-kurser på Codecademy",
            description: "Gennemførte Python-kurser på mellem- og avanceret niveau samt webudvikling med Django.",
          },
        ],
      },
    ],
  },
};

export default da;
