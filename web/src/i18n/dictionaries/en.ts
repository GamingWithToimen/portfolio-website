import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Portfolio of Tijme Vervoort, full stack developer at Innovaware building ERP systems in C#, TypeScript and React Native.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Internship 1",
    internship2: "Internship 2",
    language: "Language",
  },
  footer: { rights: "All rights reserved." },
  home: {
    eyebrow: "Portfolio",
    iAm: "I am",
    explore: "Explore now",
    internships: "Internships",
    aboutLabel: "Tijme",
    aboutTitle: "About me",
    selectedLabel: "Selected",
    projectsTitle: "Projects",
    photoAlt: "Portrait of Tijme Vervoort",
  },
  profile: {
    tagline:
      "Full Stack Developer at Innovaware, building ERP systems in C# and TypeScript, with React Native for mobile.",
    bio1: "I am 22 years old and work full-time as a full stack developer at Innovaware. I graduated from the Software Developer program (MBO level 4) at KW1C in 's-Hertogenbosch, after switching from Architecture Construction, and I now build ERP systems in C# with TypeScript, plus a mobile app in React Native.",
    bio2: "During my studies I completed two internships, at Omnilan and at AB Transport, where I worked with Python and Django. I also built a complete website for a sports club and several web projects. My earlier studies in construction gave me hands-on project experience too: a steel-framed restaurant, a 1930s residential building and a recreational facility for young people.",
  },
  work: {
    label: "Innovaware",
    title: "Work",
    role: "Full Stack Developer",
    period: "Current position",
    description:
      "I build ERP systems in C# and TypeScript and develop the accompanying mobile app in React Native.",
    skillsLabel: "Technologies",
  },
  stats: ["Years old", "Internships completed", "Current focus", "Languages used"],
  portfolio: {
    label: "Tijme",
    title: "Portfolio projects",
    projects: [
      {
        title: "Rainbow Project",
        description:
          "Span classes and visually appealing layouts, using CSS positioning and colour schemes to create a rainbow effect.",
      },
      {
        title: "Match Table Project",
        description:
          "Football match information displayed in a clear, organised format using HTML tables and CSS styling.",
      },
      {
        title: "CSS Table Alignment Exercise",
        description:
          "Took a disorganised HTML file and turned it into an appealing presentation through strategic CSS.",
      },
      {
        title: "Row and Column Span Project",
        description:
          "Experimented with row-span and column-span to build complex table layouts styled with CSS classes and IDs.",
      },
    ],
  },
  internship1: {
    label: "Internship 1",
    roleTitle: "My role at Omnilan",
    role: "At Omnilan, I worked as a software developer focused on improving internal systems and communication tools. My main responsibilities were developing and enhancing the lighting control system and streamlining the email communication system between workers.",
    sections: [
      {
        heading: "Lighting System Development",
        projects: [
          {
            title: "ISPConfig",
            description: "The primary dashboard interface of ISPConfig.",
          },
          {
            title: "Email Domain Management",
            description:
              "Creating email domains for addresses associated with the website.",
          },
          {
            title: "Email Address Configuration",
            description: "Setting up email addresses for the website's domain.",
          },
        ],
      },
      {
        heading: "Email System Enhancement",
        projects: [
          {
            title: "Rememberz",
            description: "The primary navigation interface for Rememberz users.",
          },
          {
            title: "Milight Control System",
            description:
              "User configuration settings for lighting control, including colour adjustment.",
          },
          {
            title: "Rememberz Main Interface",
            description: "The central navigation hub of the Rememberz platform.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Internship 2",
    subtitle: "Web Development & Online Learning",
    roleTitle: "My role at AB Transport",
    role: "At AB Transport, I worked as a software developer in the IT department, improving the company's email systems and their visual presentation. I built better-looking email templates and interfaces and spent time on structured online courses, advancing my Python, web frameworks and email design skills.",
    sections: [
      {
        heading: "Web Development & CMS Projects",
        projects: [
          {
            title: "Wagtail CMS Development",
            description:
              "Explored the Wagtail CMS through structured online coursework, building dynamic content management systems.",
          },
          {
            title: "Content Management Systems",
            description:
              "Built interactive blog publications with FAQ sections and dynamic carousel components.",
          },
        ],
      },
      {
        heading: "Email System Enhancement",
        projects: [
          {
            title: "Bootstrap Email Templates",
            description:
              "Designed responsive email signatures and layouts with Bootstrap Email for AB Transport.",
          },
        ],
      },
      {
        heading: "Programming Skills",
        projects: [
          {
            title: "Programming Disciplines",
            description:
              "Explored Python, JavaScript, HTML & CSS, SQL and more through structured online programs.",
          },
          {
            title: "Codecademy Python Courses",
            description:
              "Completed intermediate and advanced Python courses plus Django web development.",
          },
        ],
      },
    ],
  },
};

export default en;
