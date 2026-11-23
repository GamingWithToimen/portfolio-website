import type { Dictionary } from "../types";

const no: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portefølje",
    description:
      "Portefølje for Tijme Vervoort, full stack-utvikler hos Innovaware som bygger ERP-systemer i C#, TypeScript og React Native.",
  },
  nav: {
    home: "Hjem",
    portfolio: "Portefølje",
    internship1: "Praksis 1",
    internship2: "Praksis 2",
    language: "Språk",
  },
  footer: { rights: "Alle rettigheter forbeholdt." },
  home: {
    eyebrow: "Portefølje",
    iAm: "Jeg er",
    explore: "Utforsk nå",
    internships: "Praksisplasser",
    aboutLabel: "Tijme",
    aboutTitle: "Om meg",
    selectedLabel: "Utvalg",
    projectsTitle: "Prosjekter",
    photoAlt: "Portrett av Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full Stack-utvikler hos Innovaware, bygger ERP-systemer i C# og TypeScript, med React Native for mobil.",
    bio1: "Jeg er 22 år og jobber fulltid som full stack-utvikler hos Innovaware. Jeg er ferdig utdannet programvareutvikler (MBO nivå 4) ved KW1C i 's-Hertogenbosch, etter at jeg byttet fra byggfag. Nå bygger jeg ERP-systemer i C# med TypeScript, pluss en mobilapp i React Native.",
    bio2: "Under studiene hadde jeg to praksisplasser, hos Omnilan og hos AB Transport, hvor jeg jobbet med Python og Django. Jeg bygde også en komplett nettside for en idrettsklubb og flere nettprosjekter. Den tidligere byggutdanningen ga meg også praktisk prosjekterfaring: en restaurant med stålkonstruksjon, en bolig fra 1930-tallet og et fritidsanlegg for ungdom.",
  },
  work: {
    label: "Innovaware",
    title: "Arbeid",
    role: "Full Stack Developer",
    period: "Nåværende stilling",
    description:
      "Jeg bygger ERP-systemer i C# og TypeScript og utvikler den tilhørende mobilappen i React Native.",
    skillsLabel: "Teknologier",
  },
  stats: ["År gammel", "Praksisplasser fullført", "Nåværende fokus", "Språk brukt"],
  portfolio: {
    label: "Tijme",
    title: "Porteføljeprosjekter",
    projects: [
      {
        title: "Regnbueprosjektet",
        description:
          "Span-klasser og visuelt tiltalende oppsett, med CSS-posisjonering og fargevalg for å lage en regnbueeffekt.",
      },
      {
        title: "Kamptabell",
        description:
          "Fotballkamper presentert oversiktlig med HTML-tabeller og CSS-styling.",
      },
      {
        title: "Tabelljustering med CSS",
        description:
          "En rotete HTML-fil gjort om til en pen presentasjon med målrettet CSS.",
      },
      {
        title: "Rowspan og colspan",
        description:
          "Eksperimenterte med rowspan og colspan for å lage avanserte tabelloppsett, stilt med CSS-klasser og ID-er.",
      },
    ],
  },
  internship1: {
    label: "Praksis 1",
    roleTitle: "Min rolle hos Omnilan",
    role: "Hos Omnilan jobbet jeg som programvareutvikler og forbedret interne systemer og kommunikasjonsverktøy. Hovedoppgavene mine var å utvikle og forbedre lysstyringssystemet og forenkle e-postsystemet mellom de ansatte.",
    sections: [
      {
        heading: "Utvikling av lyssystem",
        projects: [
          {
            title: "ISPConfig",
            description: "Hoveddashbordet i ISPConfig.",
          },
          {
            title: "Administrasjon av e-postdomener",
            description:
              "Opprette e-postdomener for adresser som hører til nettsiden.",
          },
          {
            title: "Oppsett av e-postadresser",
            description: "Opprette e-postadresser for nettsidens domene.",
          },
        ],
      },
      {
        heading: "Forbedring av e-postsystemet",
        projects: [
          {
            title: "Rememberz",
            description: "Hovednavigasjonen for Rememberz-brukere.",
          },
          {
            title: "Milight-styringssystem",
            description:
              "Brukerinnstillinger for lysstyring, inkludert fargejustering.",
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
    role: "Hos AB Transport jobbet jeg som programvareutvikler på IT-avdelingen og forbedret bedriftens e-postsystemer og hvordan de ser ut. Jeg bygde penere e-postmaler og grensesnitt og brukte tid på strukturerte nettkurs for å bli bedre i Python, webrammeverk og e-postdesign.",
    sections: [
      {
        heading: "Webutvikling og CMS-prosjekter",
        projects: [
          {
            title: "Utvikling med Wagtail CMS",
            description:
              "Utforsket Wagtail CMS gjennom strukturerte nettkurs for å bygge dynamiske innholdssystemer.",
          },
          {
            title: "Innholdsstyringssystemer",
            description:
              "Bygde interaktive blogger med FAQ-seksjoner og dynamiske karuseller.",
          },
        ],
      },
      {
        heading: "Forbedring av e-postsystemet",
        projects: [
          {
            title: "Bootstrap-e-postmaler",
            description:
              "Utformet responsive e-postsignaturer og oppsett med Bootstrap Email for AB Transport.",
          },
        ],
      },
      {
        heading: "Programmeringsferdigheter",
        projects: [
          {
            title: "Programmeringsdisipliner",
            description:
              "Utforsket Python, JavaScript, HTML og CSS, SQL og mer gjennom strukturerte nettprogrammer.",
          },
          {
            title: "Python-kurs på Codecademy",
            description:
              "Fullførte Python-kurs på middels og avansert nivå, pluss webutvikling med Django.",
          },
        ],
      },
    ],
  },
};

export default no;
