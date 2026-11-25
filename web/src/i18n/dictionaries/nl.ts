import type { Dictionary } from "../types";

const nl: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio van Tijme Vervoort, junior full-stack developer bij Innovaware die CRM-systemen bouwt in C# (.NET 10) en Laravel, met een React / Next.js-front-end.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Taal",
  },
  footer: {
    rights: "Alle rechten voorbehouden.",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Ik ben",
    explore: "Ontdek nu",
    internships: "Stages",
    aboutLabel: "Profiel",
    aboutTitle: "Over mij",
    selectedLabel: "Uitgelicht",
    projectsTitle: "Projecten",
    photoAlt: "Portret van Tijme Vervoort",
  },
  profile: {
    tagline: "Junior Full-Stack Developer bij Innovaware, bouwt CRM-systemen in C# (.NET 10) en Laravel, met React / Next.js aan de front-end.",
    bio1: "Ik ben 22 jaar oud en werk fulltime als junior full-stack developer bij Innovaware. Ik ben afgestudeerd aan de opleiding Software Developer (MBO niveau 4) bij KW1C in 's-Hertogenbosch, nadat ik was overgestapt van de bouwopleiding. Nu bouw ik CRM-systemen in C# (.NET 10) en Laravel, met REST API's naar een React / Next.js-front-end.",
    bio2: "Tijdens mijn studie liep ik twee C#-stages. Bij Omnilan schreef ik software voor ESP32-apparaten om verlichting via een dashboard te bedienen; bij AB Transport maakte ik databasequery's sneller en bouwde ik een overzicht voor medewerkers in C#, Python en Django. Daarnaast bouwde ik Data-Defence (een game in C# en Unity), een website voor een sportclub en dit portfolio.",
  },
  work: {
    label: "Innovaware",
    title: "Werk",
    role: "Junior Full-Stack Developer",
    period: "Huidige functie",
    description: "Ik bouw CRM-systemen voor het mkb in C# (.NET 10) en Laravel, met REST API's die de back-end koppelen aan een React / Next.js-front-end.",
    skillsLabel: "Technologieën",
  },
  stats: [
    "features opgeleverd bij Innovaware",
    "issues opgelost bij Omnilan",
    "snellere databasequery's bij AB Transport",
    "C#-stages afgerond",
  ],
  timeline: {
    label: "Loopbaan",
    title: "Tijdlijn",
    present: "Heden",
    more: "Bekijk stage bij {org}",
    kinds: {
      work: "Werk",
      internship: "Stage",
      education: "Opleiding",
    },
    items: {
      innovaware: {
        role: "Junior Full-Stack Developer",
        description: "Ik bouw CRM-systemen voor het mkb in C# (.NET 10) en Laravel, met REST API's naar een React / Next.js-front-end, GitLab CI/CD-pipelines en een AI-helpdeskintegratie.",
      },
      abTransport: {
        role: "Stagiair softwareontwikkeling",
        description: "De databasequery's achter een rapportagepagina geoptimaliseerd, waardoor ze zo'n 2–5x sneller werden, en een nieuw overzicht voor medewerkers gebouwd in C#, Python en Django.",
      },
      omnilan: {
        role: "Stagiair softwareontwikkeling",
        description: "C#-software geschreven voor ESP32-apparaten waarmee gebruikers de verlichting in een ruimte via een knop op een dashboard schakelen, en 30 issues in bestaande code opgelost.",
      },
      kw1c: {
        role: "Software Developer (MBO niveau 4)",
        description: "De opleiding Software Developer in 's-Hertogenbosch afgerond en mijn diploma behaald, met Azure DevOps en Azure SQL in schoolprojecten.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Laten we praten",
    text: "Op zoek naar een junior .NET- of full-stack developer? Stuur me een e-mail of connect op LinkedIn.",
    email: "Mail mij",
    cv: "Download cv",
    cta: "Neem contact op",
  },
  featured: {
    github: "Bekijk op GitHub",
    private: "Klantwerk · code niet openbaar",
    items: {
      crm: {
        title: "CRM-systemen bij Innovaware",
        description: "Back-endfeatures voor CRM-systemen van het mkb: C# (.NET 10), Laravel, REST API's, MySQL, GitLab CI/CD en een AI-helpdeskintegratie.",
      },
      signature: {
        title: "E-mailhandtekening voor AB Transport",
        description: "Responsieve HTML-e-mailhandtekening voor AB Transport en AB Solutions, met beide merken, contactgegevens en sociale links. Getest in Gmail, Outlook, Apple Mail en mobiele mailapps.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "Een game in C# en Unity: vind de infiltrant bij een papierbedrijf, handel incidenten zoals branden af en ontsla medewerkers die problemen veroorzaken.",
      },
      portfolioSite: {
        title: "Dit portfolio",
        description: "Gebouwd met Next.js, React, TypeScript en Tailwind CSS, in tien talen. De eerste versie maakte ik in Python en Django.",
      },
    },
  },
  portfolio: {
    label: "Opleiding",
    title: "Portfolioprojecten",
    exercisesTitle: "Schoolopdrachten",
    projects: [
      {
        title: "Regenboogproject",
        description: "Span-klassen en visueel aantrekkelijke lay-outs, met CSS-positionering en kleurenschema's voor een regenboogeffect.",
      },
      {
        title: "Wedstrijdtabel",
        description: "Voetbalwedstrijden overzichtelijk weergegeven met HTML-tabellen en CSS-styling.",
      },
      {
        title: "CSS-tabeluitlijning",
        description: "Een rommelig HTML-bestand omgezet in een aantrekkelijke presentatie met gerichte CSS.",
      },
      {
        title: "Rij- en kolomspan",
        description: "Geëxperimenteerd met rowspan en colspan voor complexe tabellay-outs, gestyled met CSS-klassen en ID's.",
      },
    ],
  },
  internship1: {
    label: "Stage 1",
    roleTitle: "Mijn rol bij Omnilan",
    role: "Bij Omnilan werkte ik als softwareontwikkelaar met focus op het verbeteren van interne systemen en communicatiemiddelen. Mijn belangrijkste taken waren het ontwikkelen en verbeteren van het lichtbesturingssysteem en het stroomlijnen van het e-mailcommunicatiesysteem tussen medewerkers.",
    sections: [
      {
        heading: "Verbetering e-mailsysteem",
        projects: [
          {
            title: "ISPConfig",
            description: "Het hoofddashboard van ISPConfig.",
          },
          {
            title: "E-maildomeinbeheer",
            description: "E-maildomeinen aanmaken voor adressen die bij de website horen.",
          },
          {
            title: "E-mailadressen instellen",
            description: "E-mailadressen aanmaken voor het domein van de website.",
          },
        ],
      },
      {
        heading: "Ontwikkeling verlichtingssysteem",
        projects: [
          {
            title: "Rememberz",
            description: "De hoofdnavigatie voor Rememberz-gebruikers.",
          },
          {
            title: "Milight-besturingssysteem",
            description: "Gebruikersinstellingen voor lichtbesturing, inclusief kleuraanpassing.",
          },
          {
            title: "Rememberz-hoofdinterface",
            description: "De centrale navigatiehub van het Rememberz-platform.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Stage 2",
    subtitle: "Webontwikkeling & online leren",
    roleTitle: "Mijn rol bij AB Transport",
    role: "Bij AB Transport liep ik stage als softwareontwikkelaar op de IT-afdeling. Ik optimaliseerde de databasequery's achter een rapportagepagina, waardoor ze zo'n 2–5x sneller werden, bouwde een nieuw overzicht voor medewerkers in C#, Python en Django en verbeterde de e-mailtemplates van het bedrijf. Taken en code beheerden we in Azure DevOps.",
    sections: [
      {
        heading: "Webontwikkeling & CMS-projecten",
        projects: [
          {
            title: "Wagtail CMS-ontwikkeling",
            description: "Wagtail CMS verkend via gestructureerde online cursussen om dynamische contentmanagementsystemen te bouwen.",
          },
          {
            title: "Contentmanagementsystemen",
            description: "Interactieve blogpublicaties gebouwd met FAQ-secties en dynamische carrouselcomponenten.",
          },
        ],
      },
      {
        heading: "Verbetering e-mailsysteem",
        projects: [
          {
            title: "Bootstrap e-mailtemplates",
            description: "Responsieve e-mailhandtekeningen en lay-outs ontworpen met Bootstrap Email voor AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeervaardigheden",
        projects: [
          {
            title: "Programmeerdisciplines",
            description: "Python, JavaScript, HTML & CSS, SQL en meer verkend via gestructureerde online programma's.",
          },
          {
            title: "Codecademy Python-cursussen",
            description: "Halfgevorderde en gevorderde Python-cursussen afgerond, plus Django-webontwikkeling.",
          },
        ],
      },
    ],
  },
};

export default nl;
