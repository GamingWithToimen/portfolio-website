import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio de Tijme Vervoort, développeur full stack chez Innovaware, qui crée des systèmes ERP en C#, TypeScript et React Native.",
  },
  nav: {
    home: "Accueil",
    portfolio: "Portfolio",
    internship1: "Stage 1",
    internship2: "Stage 2",
    language: "Langue",
  },
  footer: { rights: "Tous droits réservés." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Je suis",
    explore: "Découvrir",
    internships: "Stages",
    aboutLabel: "Tijme",
    aboutTitle: "À propos de moi",
    selectedLabel: "Sélection",
    projectsTitle: "Projets",
    photoAlt: "Portrait de Tijme Vervoort",
  },
  profile: {
    tagline:
      "Développeur Full Stack chez Innovaware, je crée des systèmes ERP en C# et TypeScript, avec React Native pour le mobile.",
    bio1: "J'ai 22 ans et je travaille à temps plein comme développeur full stack chez Innovaware. J'ai obtenu mon diplôme de développeur logiciel (MBO niveau 4) au KW1C à Bois-le-Duc, après avoir quitté la filière construction. Aujourd'hui, je crée des systèmes ERP en C# avec TypeScript, ainsi qu'une application mobile en React Native.",
    bio2: "Pendant mes études, j'ai effectué deux stages, chez Omnilan et chez AB Transport, où j'ai travaillé avec Python et Django. J'ai aussi réalisé un site web complet pour un club de sport et plusieurs projets web. Mes premières études dans la construction m'ont également apporté une expérience concrète : un restaurant à ossature en acier, un immeuble d'habitation des années 1930 et un espace de loisirs pour les jeunes.",
  },
  work: {
    label: "Innovaware",
    title: "Expérience",
    role: "Full Stack Developer",
    period: "Poste actuel",
    description:
      "Je crée des systèmes ERP en C# et TypeScript et je développe l'application mobile associée en React Native.",
    skillsLabel: "Technologies",
  },
  stats: ["Ans", "Stages terminés", "Spécialité actuelle", "Langages utilisés"],
  portfolio: {
    label: "Tijme",
    title: "Projets du portfolio",
    projects: [
      {
        title: "Projet arc-en-ciel",
        description:
          "Classes span et mises en page attrayantes, avec positionnement CSS et palettes de couleurs pour un effet arc-en-ciel.",
      },
      {
        title: "Tableau des matchs",
        description:
          "Résultats de matchs de football présentés de façon claire avec des tableaux HTML et du CSS.",
      },
      {
        title: "Alignement de tableaux en CSS",
        description:
          "Un fichier HTML désordonné transformé en une présentation soignée grâce à un CSS ciblé.",
      },
      {
        title: "Rowspan et colspan",
        description:
          "Expérimentation avec rowspan et colspan pour créer des tableaux complexes, stylisés avec des classes et des ID CSS.",
      },
    ],
  },
  internship1: {
    label: "Stage 1",
    roleTitle: "Mon rôle chez Omnilan",
    role: "Chez Omnilan, j'ai travaillé comme développeur logiciel pour améliorer les systèmes internes et les outils de communication. Mes principales missions étaient de développer et d'améliorer le système de contrôle de l'éclairage et de simplifier le système de communication par e-mail entre les employés.",
    sections: [
      {
        heading: "Développement du système d'éclairage",
        projects: [
          {
            title: "ISPConfig",
            description: "Le tableau de bord principal d'ISPConfig.",
          },
          {
            title: "Gestion des domaines e-mail",
            description:
              "Création de domaines e-mail pour les adresses liées au site web.",
          },
          {
            title: "Configuration des adresses e-mail",
            description: "Création d'adresses e-mail pour le domaine du site web.",
          },
        ],
      },
      {
        heading: "Amélioration du système e-mail",
        projects: [
          {
            title: "Rememberz",
            description:
              "L'interface de navigation principale pour les utilisateurs de Rememberz.",
          },
          {
            title: "Système de contrôle Milight",
            description:
              "Paramètres utilisateur pour le contrôle de l'éclairage, y compris le réglage des couleurs.",
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
    role: "Chez AB Transport, j'ai travaillé comme développeur logiciel au service informatique, en améliorant les systèmes e-mail de l'entreprise et leur présentation visuelle. J'ai créé des modèles d'e-mails et des interfaces plus soignés et consacré du temps à des cours en ligne structurés pour progresser en Python, en frameworks web et en conception d'e-mails.",
    sections: [
      {
        heading: "Développement web et projets CMS",
        projects: [
          {
            title: "Développement avec Wagtail CMS",
            description:
              "Découverte de Wagtail CMS grâce à des cours en ligne structurés, pour créer des systèmes de gestion de contenu dynamiques.",
          },
          {
            title: "Systèmes de gestion de contenu",
            description:
              "Création de blogs interactifs avec des sections FAQ et des carrousels dynamiques.",
          },
        ],
      },
      {
        heading: "Amélioration du système e-mail",
        projects: [
          {
            title: "Modèles d'e-mails Bootstrap",
            description:
              "Conception de signatures et de mises en page d'e-mails responsives avec Bootstrap Email pour AB Transport.",
          },
        ],
      },
      {
        heading: "Compétences en programmation",
        projects: [
          {
            title: "Disciplines de programmation",
            description:
              "Découverte de Python, JavaScript, HTML & CSS, SQL et plus encore via des programmes en ligne structurés.",
          },
          {
            title: "Cours Python Codecademy",
            description:
              "Cours Python de niveau intermédiaire et avancé terminés, ainsi que le développement web avec Django.",
          },
        ],
      },
    ],
  },
};

export default fr;
