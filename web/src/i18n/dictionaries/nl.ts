import type { Dictionary } from "../types";

const nl: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio van Tijme Vervoort, full stack developer bij Innovaware die ERP-systemen bouwt in C#, TypeScript en React Native.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Stage 1",
    internship2: "Stage 2",
    language: "Taal",
  },
  footer: { rights: "Alle rechten voorbehouden." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Ik ben",
    explore: "Ontdek nu",
    internships: "Stages",
    aboutLabel: "Tijme",
    aboutTitle: "Over mij",
    selectedLabel: "Uitgelicht",
    projectsTitle: "Projecten",
    photoAlt: "Portret van Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full Stack Developer bij Innovaware, bouwt ERP-systemen in C# en TypeScript, met React Native voor mobiel.",
    bio1: "Ik ben 22 jaar oud en werk fulltime als full stack developer bij Innovaware. Ik ben afgestudeerd aan de opleiding Software Developer (MBO niveau 4) bij KW1C in 's-Hertogenbosch, nadat ik was overgestapt van de bouwopleiding. Nu bouw ik ERP-systemen in C# met TypeScript, plus een mobiele app in React Native.",
    bio2: "Tijdens mijn studie liep ik twee stages, bij Omnilan en bij AB Transport, waar ik met Python en Django werkte. Ook bouwde ik een complete website voor een sportclub en diverse webprojecten. Mijn eerdere bouwopleiding gaf me ook praktijkervaring met projecten: een restaurant met stalen frame, een woning uit de jaren dertig en een recreatievoorziening voor jongeren.",
  },
  stats: ["Jaar oud", "Stages afgerond", "Huidige focus", "Talen gebruikt"],
  portfolio: {
    label: "Tijme",
    title: "Portfolioprojecten",
    projects: [
      {
        title: "Regenboogproject",
        description:
          "Span-klassen en visueel aantrekkelijke lay-outs, met CSS-positionering en kleurenschema's voor een regenboogeffect.",
      },
      {
        title: "Wedstrijdtabel",
        description:
          "Voetbalwedstrijden overzichtelijk weergegeven met HTML-tabellen en CSS-styling.",
      },
      {
        title: "CSS-tabeluitlijning",
        description:
          "Een rommelig HTML-bestand omgezet in een aantrekkelijke presentatie met gerichte CSS.",
      },
      {
        title: "Rij- en kolomspan",
        description:
          "Geëxperimenteerd met rowspan en colspan voor complexe tabellay-outs, gestyled met CSS-klassen en ID's.",
      },
    ],
  },
  internship1: {
    label: "Stage 1",
    roleTitle: "Mijn rol bij Omnilan",
    role: "Bij Omnilan werkte ik als softwareontwikkelaar met focus op het verbeteren van interne systemen en communicatiemiddelen. Mijn belangrijkste taken waren het ontwikkelen en verbeteren van het lichtbesturingssysteem en het stroomlijnen van het e-mailcommunicatiesysteem tussen medewerkers.",
    sections: [
      {
        heading: "Ontwikkeling verlichtingssysteem",
        projects: [
          {
            title: "ISPConfig",
            description: "Het hoofddashboard van ISPConfig.",
          },
          {
            title: "E-maildomeinbeheer",
            description:
              "E-maildomeinen aanmaken voor adressen die bij de website horen.",
          },
          {
            title: "E-mailadressen instellen",
            description: "E-mailadressen aanmaken voor het domein van de website.",
          },
        ],
      },
      {
        heading: "Verbetering e-mailsysteem",
        projects: [
          {
            title: "Rememberz",
            description: "De hoofdnavigatie voor Rememberz-gebruikers.",
          },
          {
            title: "Milight-besturingssysteem",
            description:
              "Gebruikersinstellingen voor lichtbesturing, inclusief kleuraanpassing.",
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
    role: "Bij AB Transport werkte ik als softwareontwikkelaar op de IT-afdeling en verbeterde ik de e-mailsystemen van het bedrijf en de visuele presentatie ervan. Ik bouwde mooiere e-mailtemplates en interfaces en besteedde tijd aan gestructureerde online cursussen om mijn Python-, webframework- en e-maildesignvaardigheden te vergroten.",
    sections: [
      {
        heading: "Webontwikkeling & CMS-projecten",
        projects: [
          {
            title: "Wagtail CMS-ontwikkeling",
            description:
              "Wagtail CMS verkend via gestructureerde online cursussen om dynamische contentmanagementsystemen te bouwen.",
          },
          {
            title: "Contentmanagementsystemen",
            description:
              "Interactieve blogpublicaties gebouwd met FAQ-secties en dynamische carrouselcomponenten.",
          },
        ],
      },
      {
        heading: "Verbetering e-mailsysteem",
        projects: [
          {
            title: "Bootstrap e-mailtemplates",
            description:
              "Responsieve e-mailhandtekeningen en lay-outs ontworpen met Bootstrap Email voor AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeervaardigheden",
        projects: [
          {
            title: "Programmeerdisciplines",
            description:
              "Python, JavaScript, HTML & CSS, SQL en meer verkend via gestructureerde online programma's.",
          },
          {
            title: "Codecademy Python-cursussen",
            description:
              "Halfgevorderde en gevorderde Python-cursussen afgerond, plus Django-webontwikkeling.",
          },
        ],
      },
    ],
  },
};

export default nl;
