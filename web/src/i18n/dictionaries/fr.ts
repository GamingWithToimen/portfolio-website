import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio de Tijme Vervoort, développeur full-stack junior chez Innovaware, qui crée des systèmes CRM en C# (.NET 10) et Laravel avec un front-end React / Next.js.",
  },
  nav: {
    home: "Accueil",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Langue",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "Je suis",
    explore: "Découvrir",
    internships: "Stages",
    aboutLabel: "Profil",
    aboutTitle: "À propos de moi",
    selectedLabel: "À la une",
    projectsTitle: "Projets",
    photoAlt: "Portrait de Tijme Vervoort",
  },
  profile: {
    tagline: "Développeur full-stack junior chez Innovaware, je crée des systèmes CRM en C# (.NET 10) et Laravel, avec React / Next.js côté front-end.",
    bio1: "J'ai 22 ans et je travaille à temps plein comme développeur full-stack junior chez Innovaware. J'ai obtenu mon diplôme de développeur logiciel (MBO niveau 4) au KW1C à Bois-le-Duc, après avoir quitté la filière construction. Aujourd'hui, je crée des systèmes CRM en C# (.NET 10) et Laravel, avec des API REST vers un front-end React / Next.js.",
    bio2: "Pendant mes études, j'ai effectué deux stages en C#. Chez Omnilan, j'ai écrit un logiciel pour des appareils ESP32 qui pilote l'éclairage depuis un tableau de bord ; chez AB Transport, j'ai accéléré des requêtes de base de données et créé un aperçu pour le personnel en C#, Python et Django. J'ai aussi créé Data-Defence (un jeu en C# et Unity), un site web pour un club sportif et ce portfolio.",
  },
  work: {
    label: "Innovaware",
    title: "Expérience",
    role: "Junior Full-Stack Developer",
    period: "Poste actuel",
    description: "Je crée des systèmes CRM pour les PME en C# (.NET 10) et Laravel, avec des API REST qui relient le back-end à un front-end React / Next.js.",
    skillsLabel: "Technologies",
  },
  stats: [
    "fonctionnalités livrées chez Innovaware",
    "problèmes résolus chez Omnilan",
    "requêtes plus rapides chez AB Transport",
    "stages en C# terminés",
  ],
  timeline: {
    label: "Parcours",
    title: "Chronologie",
    present: "Aujourd'hui",
    more: "Voir le stage chez {org}",
    kinds: {
      work: "Emploi",
      internship: "Stage",
      education: "Formation",
    },
    items: {
      innovaware: {
        role: "Développeur full-stack junior",
        description: "Je développe des systèmes CRM pour les PME en C# (.NET 10) et Laravel, avec des API REST vers un front-end React / Next.js, des pipelines GitLab CI/CD et une intégration de helpdesk IA.",
      },
      abTransport: {
        role: "Stagiaire en développement logiciel",
        description: "Optimisation des requêtes de base de données d'une page de rapports, environ 2 à 5 fois plus rapides, et création d'un nouvel aperçu pour le personnel en C#, Python et Django.",
      },
      omnilan: {
        role: "Stagiaire en développement logiciel",
        description: "Développement en C# pour des appareils ESP32 permettant d'allumer l'éclairage d'une pièce depuis un bouton de tableau de bord, et correction de 30 problèmes dans le code existant.",
      },
      kw1c: {
        role: "Software Developer (MBO niveau 4)",
        description: "Formation de développeur logiciel à 's-Hertogenbosch terminée et diplôme obtenu, avec Azure DevOps et Azure SQL dans les projets scolaires.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Parlons-en",
    text: "Vous cherchez un développeur .NET ou full-stack junior ? Envoyez-moi un e-mail ou contactez-moi sur LinkedIn.",
    email: "M'écrire",
    cv: "Télécharger le CV",
    cta: "Me contacter",
  },
  featured: {
    github: "Voir sur GitHub",
    private: "Projet client · code non public",
    items: {
      dataDefence: {
        title: "Data-Defence",
        description: "Un jeu en C# et Unity : trouvez l'infiltré dans une entreprise de papier, gérez des incidents comme des incendies et renvoyez les employés qui posent problème.",
      },
      crm: {
        title: "Systèmes CRM chez Innovaware",
        description: "Fonctionnalités back-end pour des systèmes CRM destinés aux PME : C# (.NET 10), Laravel, API REST, MySQL, GitLab CI/CD et une intégration de helpdesk IA.",
      },
      portfolioSite: {
        title: "Ce portfolio",
        description: "Construit avec Next.js, React, TypeScript et Tailwind CSS, en dix langues. La première version était en Python et Django.",
      },
    },
  },
  portfolio: {
    label: "Formation",
    title: "Projets du portfolio",
    exercisesTitle: "Exercices scolaires",
    projects: [
      {
        title: "Projet arc-en-ciel",
        description: "Classes span et mises en page attrayantes, avec positionnement CSS et palettes de couleurs pour un effet arc-en-ciel.",
      },
      {
        title: "Tableau des matchs",
        description: "Résultats de matchs de football présentés de façon claire avec des tableaux HTML et du CSS.",
      },
      {
        title: "Alignement de tableaux en CSS",
        description: "Un fichier HTML désordonné transformé en une présentation soignée grâce à un CSS ciblé.",
      },
      {
        title: "Rowspan et colspan",
        description: "Expérimentation avec rowspan et colspan pour créer des tableaux complexes, stylisés avec des classes et des ID CSS.",
      },
    ],
  },
  internship1: {
    label: "Stage 1",
    roleTitle: "Mon rôle chez Omnilan",
    role: "Chez Omnilan, j'ai travaillé comme développeur logiciel pour améliorer les systèmes internes et les outils de communication. Mes principales missions étaient de développer et d'améliorer le système de contrôle de l'éclairage et de simplifier le système de communication par e-mail entre les employés.",
    sections: [
      {
        heading: "Amélioration du système e-mail",
        projects: [
          {
            title: "ISPConfig",
            description: "Le tableau de bord principal d'ISPConfig.",
          },
          {
            title: "Gestion des domaines e-mail",
            description: "Création de domaines e-mail pour les adresses liées au site web.",
          },
          {
            title: "Configuration des adresses e-mail",
            description: "Création d'adresses e-mail pour le domaine du site web.",
          },
        ],
      },
      {
        heading: "Développement du système d'éclairage",
        projects: [
          {
            title: "Rememberz",
            description: "L'interface de navigation principale pour les utilisateurs de Rememberz.",
          },
          {
            title: "Système de contrôle Milight",
            description: "Paramètres utilisateur pour le contrôle de l'éclairage, y compris le réglage des couleurs.",
          },
          {
            title: "Interface principale de Rememberz",
            description: "Le centre de navigation de la plateforme Rememberz.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Stage 2",
    subtitle: "Développement web et apprentissage en ligne",
    roleTitle: "Mon rôle chez AB Transport",
    role: "Chez AB Transport, j'étais stagiaire en développement logiciel au service informatique. J'ai optimisé les requêtes de base de données d'une page de rapports, environ 2 à 5 fois plus rapides, créé un nouvel aperçu pour le personnel en C#, Python et Django et amélioré les modèles d'e-mails de l'entreprise. Les tâches et le code étaient gérés dans Azure DevOps.",
    sections: [
      {
        heading: "Développement web et projets CMS",
        projects: [
          {
            title: "Développement avec Wagtail CMS",
            description: "Découverte de Wagtail CMS grâce à des cours en ligne structurés, pour créer des systèmes de gestion de contenu dynamiques.",
          },
          {
            title: "Systèmes de gestion de contenu",
            description: "Création de blogs interactifs avec des sections FAQ et des carrousels dynamiques.",
          },
        ],
      },
      {
        heading: "Amélioration du système e-mail",
        projects: [
          {
            title: "Modèles d'e-mails Bootstrap",
            description: "Conception de signatures et de mises en page d'e-mails responsives avec Bootstrap Email pour AB Transport.",
          },
        ],
      },
      {
        heading: "Compétences en programmation",
        projects: [
          {
            title: "Disciplines de programmation",
            description: "Découverte de Python, JavaScript, HTML & CSS, SQL et plus encore via des programmes en ligne structurés.",
          },
          {
            title: "Cours Python Codecademy",
            description: "Cours Python de niveau intermédiaire et avancé terminés, ainsi que le développement web avec Django.",
          },
        ],
      },
    ],
  },
};

export default fr;
