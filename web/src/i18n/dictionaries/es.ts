import type { Dictionary } from "../types";

const es: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portafolio",
    description:
      "Portafolio de Tijme Vervoort, desarrollador full stack en Innovaware que crea sistemas ERP con C#, TypeScript y React Native.",
  },
  nav: {
    home: "Inicio",
    portfolio: "Portafolio",
    internship1: "Prácticas 1",
    internship2: "Prácticas 2",
    language: "Idioma",
  },
  footer: { rights: "Todos los derechos reservados." },
  home: {
    eyebrow: "Portafolio",
    iAm: "Soy",
    explore: "Explorar",
    internships: "Prácticas",
    aboutLabel: "Tijme",
    aboutTitle: "Sobre mí",
    selectedLabel: "Selección",
    projectsTitle: "Proyectos",
    photoAlt: "Retrato de Tijme Vervoort",
  },
  profile: {
    tagline:
      "Desarrollador Full Stack en Innovaware, creo sistemas ERP con C# y TypeScript, y React Native para móvil.",
    bio1: "Tengo 22 años y trabajo a tiempo completo como desarrollador full stack en Innovaware. Me gradué en el ciclo de Desarrollo de Software (MBO nivel 4) en el KW1C de 's-Hertogenbosch, tras cambiarme desde la rama de construcción. Ahora creo sistemas ERP con C# y TypeScript, además de una aplicación móvil en React Native.",
    bio2: "Durante mis estudios hice dos periodos de prácticas, en Omnilan y en AB Transport, donde trabajé con Python y Django. También creé un sitio web completo para un club deportivo y varios proyectos web. Mis estudios anteriores de construcción también me dieron experiencia práctica en proyectos: un restaurante con estructura de acero, un edificio residencial de los años treinta y un centro recreativo para jóvenes.",
  },
  work: {
    label: "Innovaware",
    title: "Trabajo",
    role: "Full Stack Developer",
    period: "Puesto actual",
    description:
      "Creo sistemas ERP con C# y TypeScript y desarrollo la aplicación móvil asociada con React Native.",
    skillsLabel: "Tecnologías",
  },
  stats: ["Años", "Prácticas completadas", "Enfoque actual", "Lenguajes usados"],
  portfolio: {
    label: "Tijme",
    title: "Proyectos del portafolio",
    projects: [
      {
        title: "Proyecto arcoíris",
        description:
          "Clases span y diseños atractivos, con posicionamiento CSS y combinaciones de color para lograr un efecto arcoíris.",
      },
      {
        title: "Tabla de partidos",
        description:
          "Información de partidos de fútbol mostrada con claridad mediante tablas HTML y estilos CSS.",
      },
      {
        title: "Alineación de tablas con CSS",
        description:
          "Un archivo HTML desordenado convertido en una presentación atractiva con CSS bien aplicado.",
      },
      {
        title: "Rowspan y colspan",
        description:
          "Experimentos con rowspan y colspan para crear tablas complejas, con estilos mediante clases e ID de CSS.",
      },
    ],
  },
  internship1: {
    label: "Prácticas 1",
    roleTitle: "Mi papel en Omnilan",
    role: "En Omnilan trabajé como desarrollador de software, mejorando los sistemas internos y las herramientas de comunicación. Mis principales tareas fueron desarrollar y mejorar el sistema de control de iluminación y simplificar el sistema de comunicación por correo entre los empleados.",
    sections: [
      {
        heading: "Desarrollo del sistema de iluminación",
        projects: [
          {
            title: "ISPConfig",
            description: "El panel principal de ISPConfig.",
          },
          {
            title: "Gestión de dominios de correo",
            description:
              "Creación de dominios de correo para las direcciones del sitio web.",
          },
          {
            title: "Configuración de direcciones de correo",
            description:
              "Creación de direcciones de correo para el dominio del sitio web.",
          },
        ],
      },
      {
        heading: "Mejora del sistema de correo",
        projects: [
          {
            title: "Rememberz",
            description:
              "La interfaz de navegación principal para los usuarios de Rememberz.",
          },
          {
            title: "Sistema de control Milight",
            description:
              "Ajustes de usuario para el control de la iluminación, incluido el cambio de color.",
          },
          {
            title: "Interfaz principal de Rememberz",
            description: "El centro de navegación de la plataforma Rememberz.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Prácticas 2",
    subtitle: "Desarrollo web y aprendizaje en línea",
    roleTitle: "Mi papel en AB Transport",
    role: "En AB Transport trabajé como desarrollador de software en el departamento de TI, mejorando los sistemas de correo de la empresa y su presentación visual. Creé plantillas de correo e interfaces más atractivas y dediqué tiempo a cursos en línea estructurados para mejorar en Python, frameworks web y diseño de correos.",
    sections: [
      {
        heading: "Desarrollo web y proyectos de CMS",
        projects: [
          {
            title: "Desarrollo con Wagtail CMS",
            description:
              "Exploración de Wagtail CMS mediante cursos en línea estructurados, para crear sistemas de gestión de contenido dinámicos.",
          },
          {
            title: "Sistemas de gestión de contenido",
            description:
              "Creación de blogs interactivos con secciones de preguntas frecuentes y carruseles dinámicos.",
          },
        ],
      },
      {
        heading: "Mejora del sistema de correo",
        projects: [
          {
            title: "Plantillas de correo con Bootstrap",
            description:
              "Diseño de firmas y diseños de correo adaptables con Bootstrap Email para AB Transport.",
          },
        ],
      },
      {
        heading: "Habilidades de programación",
        projects: [
          {
            title: "Disciplinas de programación",
            description:
              "Exploración de Python, JavaScript, HTML y CSS, SQL y más mediante programas en línea estructurados.",
          },
          {
            title: "Cursos de Python en Codecademy",
            description:
              "Cursos de Python de nivel intermedio y avanzado completados, además de desarrollo web con Django.",
          },
        ],
      },
    ],
  },
};

export default es;
