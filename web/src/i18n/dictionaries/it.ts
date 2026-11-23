import type { Dictionary } from "../types";

const it: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio di Tijme Vervoort, sviluppatore full stack presso Innovaware che realizza sistemi ERP in C#, TypeScript e React Native.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Tirocinio 1",
    internship2: "Tirocinio 2",
    language: "Lingua",
  },
  footer: { rights: "Tutti i diritti riservati." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Sono",
    explore: "Scopri ora",
    internships: "Tirocini",
    aboutLabel: "Tijme",
    aboutTitle: "Chi sono",
    selectedLabel: "In evidenza",
    projectsTitle: "Progetti",
    photoAlt: "Ritratto di Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full Stack Developer presso Innovaware, realizzo sistemi ERP in C# e TypeScript, con React Native per il mobile.",
    bio1: "Ho 22 anni e lavoro a tempo pieno come sviluppatore full stack presso Innovaware. Mi sono diplomato in Sviluppo Software (MBO livello 4) al KW1C di 's-Hertogenbosch, dopo aver cambiato indirizzo rispetto all'edilizia. Oggi realizzo sistemi ERP in C# con TypeScript, oltre a un'app mobile in React Native.",
    bio2: "Durante gli studi ho svolto due tirocini, presso Omnilan e presso AB Transport, dove ho lavorato con Python e Django. Ho inoltre realizzato un sito web completo per una società sportiva e diversi progetti web. Anche i miei studi precedenti nell'edilizia mi hanno dato esperienza pratica: un ristorante con struttura in acciaio, un edificio residenziale degli anni Trenta e una struttura ricreativa per i giovani.",
  },
  work: {
    label: "Innovaware",
    title: "Lavoro",
    role: "Full Stack Developer",
    period: "Posizione attuale",
    description:
      "Realizzo sistemi ERP in C# e TypeScript e sviluppo la relativa app mobile in React Native.",
    skillsLabel: "Tecnologie",
  },
  stats: ["Anni", "Tirocini completati", "Focus attuale", "Linguaggi usati"],
  portfolio: {
    label: "Tijme",
    title: "Progetti del portfolio",
    projects: [
      {
        title: "Progetto arcobaleno",
        description:
          "Classi span e layout accattivanti, con posizionamento CSS e schemi di colore per creare un effetto arcobaleno.",
      },
      {
        title: "Tabella delle partite",
        description:
          "Informazioni sulle partite di calcio mostrate in modo chiaro con tabelle HTML e stili CSS.",
      },
      {
        title: "Allineamento di tabelle con CSS",
        description:
          "Un file HTML disordinato trasformato in una presentazione curata grazie a un CSS mirato.",
      },
      {
        title: "Rowspan e colspan",
        description:
          "Sperimentazione con rowspan e colspan per creare tabelle complesse, con stili tramite classi e ID CSS.",
      },
    ],
  },
  internship1: {
    label: "Tirocinio 1",
    roleTitle: "Il mio ruolo in Omnilan",
    role: "In Omnilan ho lavorato come sviluppatore software, migliorando i sistemi interni e gli strumenti di comunicazione. Le mie responsabilità principali erano sviluppare e migliorare il sistema di controllo dell'illuminazione e semplificare il sistema di comunicazione via e-mail tra i dipendenti.",
    sections: [
      {
        heading: "Sviluppo del sistema di illuminazione",
        projects: [
          {
            title: "ISPConfig",
            description: "La dashboard principale di ISPConfig.",
          },
          {
            title: "Gestione dei domini e-mail",
            description:
              "Creazione di domini e-mail per gli indirizzi associati al sito web.",
          },
          {
            title: "Configurazione degli indirizzi e-mail",
            description: "Creazione di indirizzi e-mail per il dominio del sito web.",
          },
        ],
      },
      {
        heading: "Miglioramento del sistema e-mail",
        projects: [
          {
            title: "Rememberz",
            description:
              "L'interfaccia di navigazione principale per gli utenti di Rememberz.",
          },
          {
            title: "Sistema di controllo Milight",
            description:
              "Impostazioni utente per il controllo dell'illuminazione, compresa la regolazione del colore.",
          },
          {
            title: "Interfaccia principale di Rememberz",
            description: "L'hub di navigazione centrale della piattaforma Rememberz.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Tirocinio 2",
    subtitle: "Sviluppo web e apprendimento online",
    roleTitle: "Il mio ruolo in AB Transport",
    role: "In AB Transport ho lavorato come sviluppatore software nel reparto IT, migliorando i sistemi e-mail dell'azienda e la loro presentazione grafica. Ho realizzato modelli di e-mail e interfacce più curati e dedicato tempo a corsi online strutturati per crescere in Python, framework web e design delle e-mail.",
    sections: [
      {
        heading: "Sviluppo web e progetti CMS",
        projects: [
          {
            title: "Sviluppo con Wagtail CMS",
            description:
              "Studio di Wagtail CMS tramite corsi online strutturati, per creare sistemi di gestione dei contenuti dinamici.",
          },
          {
            title: "Sistemi di gestione dei contenuti",
            description:
              "Creazione di blog interattivi con sezioni FAQ e caroselli dinamici.",
          },
        ],
      },
      {
        heading: "Miglioramento del sistema e-mail",
        projects: [
          {
            title: "Modelli e-mail con Bootstrap",
            description:
              "Progettazione di firme e layout e-mail responsive con Bootstrap Email per AB Transport.",
          },
        ],
      },
      {
        heading: "Competenze di programmazione",
        projects: [
          {
            title: "Discipline di programmazione",
            description:
              "Studio di Python, JavaScript, HTML e CSS, SQL e altro tramite programmi online strutturati.",
          },
          {
            title: "Corsi di Python su Codecademy",
            description:
              "Corsi di Python di livello intermedio e avanzato completati, più sviluppo web con Django.",
          },
        ],
      },
    ],
  },
};

export default it;
