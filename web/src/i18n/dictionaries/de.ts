import type { Dictionary } from "../types";

const de: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio von Tijme Vervoort, Full-Stack-Entwickler bei Innovaware, der ERP-Systeme in C#, TypeScript und React Native entwickelt.",
  },
  nav: {
    home: "Startseite",
    portfolio: "Portfolio",
    internship1: "Praktikum 1",
    internship2: "Praktikum 2",
    language: "Sprache",
  },
  footer: { rights: "Alle Rechte vorbehalten." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Ich bin",
    explore: "Jetzt entdecken",
    internships: "Praktika",
    aboutLabel: "Tijme",
    aboutTitle: "Über mich",
    selectedLabel: "Auswahl",
    projectsTitle: "Projekte",
    photoAlt: "Porträt von Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full-Stack-Entwickler bei Innovaware, entwickelt ERP-Systeme in C# und TypeScript, mit React Native für mobile Apps.",
    bio1: "Ich bin 22 Jahre alt und arbeite in Vollzeit als Full-Stack-Entwickler bei Innovaware. Ich habe die Ausbildung zum Softwareentwickler (MBO Niveau 4) am KW1C in 's-Hertogenbosch abgeschlossen, nachdem ich aus dem Bereich Bau gewechselt war. Heute entwickle ich ERP-Systeme in C# mit TypeScript sowie eine mobile App in React Native.",
    bio2: "Während meines Studiums habe ich zwei Praktika absolviert, bei Omnilan und bei AB Transport, wo ich mit Python und Django gearbeitet habe. Außerdem habe ich eine komplette Website für einen Sportverein und mehrere Webprojekte entwickelt. Auch mein früheres Bau-Studium brachte praktische Projekterfahrung: ein Restaurant mit Stahlskelett, ein Wohnhaus aus den 1930er-Jahren und eine Freizeiteinrichtung für Jugendliche.",
  },
  stats: ["Jahre alt", "Praktika abgeschlossen", "Aktueller Fokus", "Verwendete Sprachen"],
  portfolio: {
    label: "Tijme",
    title: "Portfolio-Projekte",
    projects: [
      {
        title: "Regenbogen-Projekt",
        description:
          "Span-Klassen und ansprechende Layouts mit CSS-Positionierung und Farbschemata für einen Regenbogeneffekt.",
      },
      {
        title: "Spieltabelle",
        description:
          "Fußballspiele übersichtlich dargestellt mit HTML-Tabellen und CSS-Styling.",
      },
      {
        title: "CSS-Tabellenausrichtung",
        description:
          "Eine unordentliche HTML-Datei durch gezieltes CSS in eine ansprechende Darstellung verwandelt.",
      },
      {
        title: "Rowspan und Colspan",
        description:
          "Mit Rowspan und Colspan experimentiert, um komplexe Tabellenlayouts zu bauen, gestaltet mit CSS-Klassen und IDs.",
      },
    ],
  },
  internship1: {
    label: "Praktikum 1",
    roleTitle: "Meine Rolle bei Omnilan",
    role: "Bei Omnilan habe ich als Softwareentwickler gearbeitet und interne Systeme und Kommunikationswerkzeuge verbessert. Meine Hauptaufgaben waren die Entwicklung und Verbesserung des Lichtsteuerungssystems sowie die Vereinfachung des E-Mail-Kommunikationssystems zwischen den Mitarbeitern.",
    sections: [
      {
        heading: "Entwicklung des Lichtsystems",
        projects: [
          {
            title: "ISPConfig",
            description: "Das Haupt-Dashboard von ISPConfig.",
          },
          {
            title: "E-Mail-Domain-Verwaltung",
            description: "E-Mail-Domains für Adressen der Website einrichten.",
          },
          {
            title: "E-Mail-Adressen einrichten",
            description: "E-Mail-Adressen für die Domain der Website anlegen.",
          },
        ],
      },
      {
        heading: "Verbesserung des E-Mail-Systems",
        projects: [
          {
            title: "Rememberz",
            description: "Die Hauptnavigation für Rememberz-Nutzer.",
          },
          {
            title: "Milight-Steuerungssystem",
            description:
              "Benutzereinstellungen für die Lichtsteuerung, einschließlich Farbanpassung.",
          },
          {
            title: "Rememberz-Hauptoberfläche",
            description: "Die zentrale Navigationsseite der Rememberz-Plattform.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Praktikum 2",
    subtitle: "Webentwicklung & Online-Lernen",
    roleTitle: "Meine Rolle bei AB Transport",
    role: "Bei AB Transport habe ich als Softwareentwickler in der IT-Abteilung gearbeitet und die E-Mail-Systeme des Unternehmens sowie deren optische Gestaltung verbessert. Ich habe ansprechendere E-Mail-Vorlagen und Oberflächen gebaut und mich mit strukturierten Online-Kursen in Python, Web-Frameworks und E-Mail-Design weitergebildet.",
    sections: [
      {
        heading: "Webentwicklung & CMS-Projekte",
        projects: [
          {
            title: "Wagtail-CMS-Entwicklung",
            description:
              "Wagtail CMS in strukturierten Online-Kursen kennengelernt, um dynamische Content-Management-Systeme zu bauen.",
          },
          {
            title: "Content-Management-Systeme",
            description:
              "Interaktive Blogs mit FAQ-Bereichen und dynamischen Karussell-Komponenten erstellt.",
          },
        ],
      },
      {
        heading: "Verbesserung des E-Mail-Systems",
        projects: [
          {
            title: "Bootstrap-E-Mail-Vorlagen",
            description:
              "Responsive E-Mail-Signaturen und Layouts mit Bootstrap Email für AB Transport entworfen.",
          },
        ],
      },
      {
        heading: "Programmierkenntnisse",
        projects: [
          {
            title: "Programmierdisziplinen",
            description:
              "Python, JavaScript, HTML & CSS, SQL und mehr in strukturierten Online-Programmen erkundet.",
          },
          {
            title: "Codecademy-Python-Kurse",
            description:
              "Fortgeschrittene Python-Kurse sowie Django-Webentwicklung abgeschlossen.",
          },
        ],
      },
    ],
  },
};

export default de;
