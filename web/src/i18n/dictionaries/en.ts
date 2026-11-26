import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description: "Portfolio of Tijme Vervoort, junior full-stack developer at Innovaware building CRM systems in C# (.NET 10) and Laravel with a React / Next.js front-end.",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    internship1: "Omnilan",
    internship2: "AB Transport",
    language: "Language",
    work: "Work",
    about: "About",
    stack: "Stack",
    backHome: "Back to home",
    allProjects: "All projects",
    nextInternship: "Next internship",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with C#, coffee & curiosity",
  },
  home: {
    eyebrow: "Junior Full-Stack Developer · C# / .NET",
    iAm: "I am",
    explore: "Explore now",
    internships: "Internships",
    aboutLabel: "Profile",
    aboutTitle: "About me",
    selectedLabel: "Featured",
    projectsTitle: "Projects",
    photoAlt: "Portrait of Tijme Vervoort",
    terminalWho: "developer, builder, gamer",
    terminalStatus: "building CRMs @ Innovaware",
  },
  stack: {
    label: "My",
    title: "Stack",
    groups: {
      backend: "Back-end",
      frontend: "Front-end",
      data: "Data",
      hardware: "Hardware & games",
      tooling: "Tooling",
      also: "Also",
    },
  },
  internshipMeta: {
    role: "Role",
    stack: "Stack",
    result: "Result",
  },
  profile: {
    tagline: "Junior Full-Stack Developer at Innovaware, building CRM systems in C# (.NET 10) and Laravel, with React / Next.js on the front-end.",
    bio1: "I am 22 years old and work full-time as a junior full-stack developer at Innovaware. I graduated from the Software Developer programme (MBO level 4) at KW1C in 's-Hertogenbosch, after switching from construction and architecture, and I now build CRM systems in C# (.NET 10) and Laravel, with REST APIs to a React / Next.js front-end.",
    bio2: "During my studies I completed two C# internships. At Omnilan I wrote software for ESP32 devices that controls lighting from a dashboard; at AB Transport I sped up database queries and built a staff overview in C#, Python and Django. I also built Data-Defence (a game in C# and Unity), a website for a sports club and this portfolio.",
  },
  work: {
    label: "Innovaware",
    title: "Work",
    role: "Junior Full-Stack Developer",
    period: "Current position",
    description: "I build CRM systems for small and medium-sized businesses in C# (.NET 10) and Laravel, with REST APIs connecting the back-end to a React / Next.js front-end.",
    skillsLabel: "Technologies",
  },
  stats: [
    "features delivered at Innovaware",
    "issues fixed at Omnilan",
    "faster database queries at AB Transport",
    "C# internships completed",
  ],
  timeline: {
    label: "Career",
    title: "Timeline",
    present: "Present",
    more: "View internship at {org}",
    kinds: {
      work: "Work",
      internship: "Internship",
      education: "Education",
    },
    items: {
      innovaware: {
        role: "Junior Full-Stack Developer",
        description: "Building CRM systems for small and medium-sized businesses in C# (.NET 10) and Laravel, with REST APIs to a React / Next.js front-end, GitLab CI/CD pipelines and an AI helpdesk integration.",
      },
      abTransport: {
        role: "Software Development Intern",
        description: "Optimised the database queries behind a report page, making them about 2–5x faster, and built a new staff overview in C#, Python and Django.",
      },
      omnilan: {
        role: "Software Development Intern",
        description: "Wrote C# software for ESP32 devices so users can switch a room's lighting from a dashboard button, and fixed 30 issues in existing code.",
      },
      kw1c: {
        role: "Software Developer (MBO level 4)",
        description: "Completed the Software Developer programme in 's-Hertogenbosch and obtained my diploma, using Azure DevOps and Azure SQL in school projects.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    text: "Looking for a junior .NET or full-stack developer? Send me an email or connect on LinkedIn.",
    email: "Email me",
    cv: "Download CV",
    cta: "Get in touch",
    location: "Nistelrode · Uden-Veghel area · Dutch and English (B2)",
  },
  featured: {
    github: "View on GitHub",
    private: "Client work · code not public",
    items: {
      crm: {
        title: "CRM systems at Innovaware",
        description: "Back-end features for CRM systems used by small and medium-sized businesses: C# (.NET 10), Laravel, REST APIs, MySQL, GitLab CI/CD and an AI helpdesk integration.",
      },
      signature: {
        title: "Email signature for AB Transport",
        description: "Responsive HTML email signature for AB Transport and AB Solutions, with both brands, contact details and social links. Tested in Gmail, Outlook, Apple Mail and mobile clients.",
      },
      dataDefence: {
        title: "Data-Defence",
        description: "A game in C# and Unity: find the infiltrator at a paper company, handle incidents such as fires and dismiss employees who cause trouble.",
      },
      portfolioSite: {
        title: "This portfolio",
        description: "Built with Next.js, React, TypeScript and Tailwind CSS, in ten languages. The first version was made in Python and Django.",
      },
    },
  },
  portfolio: {
    label: "Education",
    title: "Portfolio projects",
    exercisesTitle: "School exercises",
    intro: "Client work, internship work and personal projects. Each project shows what it does, what it was built with and where to see the code.",
    exercisesSubtitle: "Assignments from Koning Willem I College",
    projects: [
      {
        title: "Rainbow Project",
        description: "Span classes and visually appealing layouts, using CSS positioning and colour schemes to create a rainbow effect.",
      },
      {
        title: "Match Table Project",
        description: "Football match information displayed in a clear, organised format using HTML tables and CSS styling.",
      },
      {
        title: "CSS Table Alignment Exercise",
        description: "Took a disorganised HTML file and turned it into an appealing presentation through strategic CSS.",
      },
      {
        title: "Row and Column Span Project",
        description: "Experimented with row-span and column-span to build complex table layouts styled with CSS classes and IDs.",
      },
    ],
  },
  internship1: {
    label: "Internship 1",
    roleTitle: "My role at Omnilan",
    role: "At Omnilan, I worked as a software developer focused on improving internal systems and communication tools. My main responsibilities were developing and enhancing the lighting control system and streamlining the email communication system between workers.",
    sections: [
      {
        heading: "Email System Enhancement",
        projects: [
          {
            title: "ISPConfig",
            description: "The primary dashboard interface of ISPConfig.",
          },
          {
            title: "Email Domain Management",
            description: "Creating email domains for addresses associated with the website.",
          },
          {
            title: "Email Address Configuration",
            description: "Setting up email addresses for the website's domain.",
          },
        ],
      },
      {
        heading: "Lighting System Development",
        projects: [
          {
            title: "Rememberz",
            description: "The primary navigation interface for Rememberz users.",
          },
          {
            title: "Milight Control System",
            description: "User configuration settings for lighting control, including colour adjustment.",
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
    role: "At AB Transport I was a software development intern in the IT department. I optimised the database queries behind a report page, making them about 2–5x faster, built a new staff overview in C#, Python and Django and improved the company's email templates. Tasks and code were managed in Azure DevOps.",
    sections: [
      {
        heading: "Web Development & CMS Projects",
        projects: [
          {
            title: "Wagtail CMS Development",
            description: "Explored the Wagtail CMS through structured online coursework, building dynamic content management systems.",
          },
          {
            title: "Content Management Systems",
            description: "Built interactive blog publications with FAQ sections and dynamic carousel components.",
          },
        ],
      },
      {
        heading: "Email System Enhancement",
        projects: [
          {
            title: "Bootstrap Email Templates",
            description: "Designed responsive email signatures and layouts with Bootstrap Email for AB Transport.",
          },
        ],
      },
      {
        heading: "Programming Skills",
        projects: [
          {
            title: "Programming Disciplines",
            description: "Explored Python, JavaScript, HTML & CSS, SQL and more through structured online programs.",
          },
          {
            title: "Codecademy Python Courses",
            description: "Completed intermediate and advanced Python courses plus Django web development.",
          },
        ],
      },
    ],
  },
};

export default en;
