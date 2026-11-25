import type { Dictionary } from "../types";

const it: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio di Tijme Vervoort, sviluppatore full-stack junior presso Innovaware che realizza sistemi CRM in C# (.NET 10) e Laravel con un front-end React / Next.js.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Lingua",
  },
  footer: {
    rights: "Tutti i diritti riservati.",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Sono",
    explore: "Scopri ora",
    internships: "Tirocini",
    aboutLabel: "Profilo",
    aboutTitle: "Chi sono",
    selectedLabel: "In evidenza",
    projectsTitle: "Progetti",
    photoAlt: "Ritratto di Tijme Vervoort",
  },
  profile: {
    tagline: "Sviluppatore full-stack junior presso Innovaware, realizzo sistemi CRM in C# (.NET 10) e Laravel, con React / Next.js sul front-end.",
    bio1: "Ho 22 anni e lavoro a tempo pieno come sviluppatore full-stack junior presso Innovaware. Mi sono diplomato in Sviluppo Software (MBO livello 4) al KW1C di 's-Hertogenbosch, dopo aver cambiato indirizzo rispetto all'edilizia. Oggi realizzo sistemi CRM in C# (.NET 10) e Laravel, con API REST verso un front-end React / Next.js.",
    bio2: "Durante gli studi ho svolto due tirocini in C#. In Omnilan ho scritto software per dispositivi ESP32 che controlla le luci da una dashboard; in AB Transport ho velocizzato le query di database e sviluppato una panoramica per il personale in C#, Python e Django. Ho anche creato Data-Defence (un gioco in C# e Unity), un sito per una società sportiva e questo portfolio.",
  },
  work: {
    label: "Innovaware",
    title: "Lavoro",
    role: "Junior Full-Stack Developer",
    period: "Posizione attuale",
    description: "Realizzo sistemi CRM per piccole e medie imprese in C# (.NET 10) e Laravel, con API REST che collegano il back-end a un front-end React / Next.js.",
    skillsLabel: "Tecnologie",
  },
  stats: [
    "funzionalità consegnate in Innovaware",
    "problemi risolti in Omnilan",
    "query più veloci in AB Transport",
    "tirocini in C# completati",
  ],
  timeline: {
    label: "Percorso",
    title: "Cronologia",
    present: "Oggi",
    more: "Vedi tirocinio presso {org}",
    kinds: {
      work: "Lavoro",
      internship: "Tirocinio",
      education: "Formazione",
    },
    items: {
      innovaware: {
        role: "Sviluppatore full-stack junior",
        description: "Sviluppo sistemi CRM per piccole e medie imprese in C# (.NET 10) e Laravel, con API REST verso un front-end React / Next.js, pipeline GitLab CI/CD e un'integrazione di helpdesk con IA.",
      },
      abTransport: {
        role: "Tirocinante sviluppo software",
        description: "Ho ottimizzato le query di database di una pagina di report, circa 2–5 volte più veloci, e sviluppato una nuova panoramica per il personale in C#, Python e Django.",
      },
      omnilan: {
        role: "Tirocinante sviluppo software",
        description: "Ho scritto software C# per dispositivi ESP32 che permette di accendere le luci di una stanza da un pulsante della dashboard, e risolto 30 problemi nel codice esistente.",
      },
      kw1c: {
        role: "Software Developer (MBO livello 4)",
        description: "Ho completato il percorso di sviluppatore software a 's-Hertogenbosch e ottenuto il diploma, usando Azure DevOps e Azure SQL nei progetti scolastici.",
      },
    },
  },
  contact: {
    label: "Contatti",
    title: "Parliamone",
    text: "Cerchi uno sviluppatore .NET o full-stack junior? Scrivimi un'email o collegati con me su LinkedIn.",
    email: "Scrivimi",
    cv: "Scarica il CV",
    cta: "Contattami",
  },
  featured: {
    github: "Vedi su GitHub",
    private: "Progetto cliente · codice non pubblico",
    items: {
      crm: {
        title: "Sistemi CRM in Innovaware",
        description: "Funzionalità back-end per sistemi CRM di piccole e medie imprese: C# (.NET 10), Laravel, API REST, MySQL, GitLab CI/CD e un'integrazione di helpdesk con IA.",
      },
      signature: {
        title: "Firma email per AB Transport",
        description: "Firma email HTML responsive per AB Transport e AB Solutions, con entrambi i marchi, i contatti e i link ai social. Testata in Gmail, Outlook, Apple Mail e sui client mobili.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "Un gioco in C# e Unity: trova l'infiltrato in un'azienda di carta, gestisci incidenti come incendi e licenzia i dipendenti che creano problemi.",
      },
      portfolioSite: {
        title: "Questo portfolio",
        description: "Realizzato con Next.js, React, TypeScript e Tailwind CSS, in dieci lingue. La prima versione era in Python e Django.",
      },
    },
  },
  portfolio: {
    label: "Formazione",
    title: "Progetti del portfolio",
    exercisesTitle: "Esercizi scolastici",
    projects: [
      {
        title: "Progetto arcobaleno",
        description: "Classi span e layout accattivanti, con posizionamento CSS e schemi di colore per creare un effetto arcobaleno.",
      },
      {
        title: "Tabella delle partite",
        description: "Informazioni sulle partite di calcio mostrate in modo chiaro con tabelle HTML e stili CSS.",
      },
      {
        title: "Allineamento di tabelle con CSS",
        description: "Un file HTML disordinato trasformato in una presentazione curata grazie a un CSS mirato.",
      },
      {
        title: "Rowspan e colspan",
        description: "Sperimentazione con rowspan e colspan per creare tabelle complesse, con stili tramite classi e ID CSS.",
      },
    ],
  },
  internship1: {
    label: "Tirocinio 1",
    roleTitle: "Il mio ruolo in Omnilan",
    role: "In Omnilan ho lavorato come sviluppatore software, migliorando i sistemi interni e gli strumenti di comunicazione. Le mie responsabilità principali erano sviluppare e migliorare il sistema di controllo dell'illuminazione e semplificare il sistema di comunicazione via e-mail tra i dipendenti.",
    sections: [
      {
        heading: "Miglioramento del sistema e-mail",
        projects: [
          {
            title: "ISPConfig",
            description: "La dashboard principale di ISPConfig.",
          },
          {
            title: "Gestione dei domini e-mail",
            description: "Creazione di domini e-mail per gli indirizzi associati al sito web.",
          },
          {
            title: "Configurazione degli indirizzi e-mail",
            description: "Creazione di indirizzi e-mail per il dominio del sito web.",
          },
        ],
      },
      {
        heading: "Sviluppo del sistema di illuminazione",
        projects: [
          {
            title: "Rememberz",
            description: "L'interfaccia di navigazione principale per gli utenti di Rememberz.",
          },
          {
            title: "Sistema di controllo Milight",
            description: "Impostazioni utente per il controllo dell'illuminazione, compresa la regolazione del colore.",
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
    role: "In AB Transport ho svolto un tirocinio di sviluppo software nel reparto IT. Ho ottimizzato le query di database di una pagina di report, circa 2–5 volte più veloci, sviluppato una nuova panoramica per il personale in C#, Python e Django e migliorato i modelli email dell'azienda. Attività e codice erano gestiti in Azure DevOps.",
    sections: [
      {
        heading: "Sviluppo web e progetti CMS",
        projects: [
          {
            title: "Sviluppo con Wagtail CMS",
            description: "Studio di Wagtail CMS tramite corsi online strutturati, per creare sistemi di gestione dei contenuti dinamici.",
          },
          {
            title: "Sistemi di gestione dei contenuti",
            description: "Creazione di blog interattivi con sezioni FAQ e caroselli dinamici.",
          },
        ],
      },
      {
        heading: "Miglioramento del sistema e-mail",
        projects: [
          {
            title: "Modelli e-mail con Bootstrap",
            description: "Progettazione di firme e layout e-mail responsive con Bootstrap Email per AB Transport.",
          },
        ],
      },
      {
        heading: "Competenze di programmazione",
        projects: [
          {
            title: "Discipline di programmazione",
            description: "Studio di Python, JavaScript, HTML e CSS, SQL e altro tramite programmi online strutturati.",
          },
          {
            title: "Corsi di Python su Codecademy",
            description: "Corsi di Python di livello intermedio e avanzato completati, più sviluppo web con Django.",
          },
        ],
      },
    ],
  },
};

export default it;
