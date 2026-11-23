# Portfolio Website

Portfolio of Tijme Vervoort.

## Structure

```
portfolio-website/
├── web/             Current site: Next.js + TypeScript + Tailwind
│   ├── public/images/   Project screenshots and profile photo
│   └── src/
│       ├── app/[lang]/  Pages (home, portfolio, internship-1, internship-2)
│       ├── components/  Header, Footer, LanguageSwitcher, ProjectCard, ...
│       ├── data/        Images and numbers (language-independent)
│       ├── i18n/        Languages: config, types and one dictionary per language
│       └── proxy.ts     Redirects / to the visitor's browser language
└── legacy-django/   Previous site: Python + Django (kept for reference)
```

## Run the current site

Requires Node.js 20 or newer.

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing the content

The site is available in 10 languages: English, Dutch, French, German, Spanish,
Italian, Norwegian, Swedish, Danish and Finnish.

- Text: one file per language in `web/src/i18n/dictionaries/`. The structure is
  defined in `web/src/i18n/types.ts`, so TypeScript flags any language that is
  missing a line.
- Images and numbers: `web/src/data/media.ts`.
- Add a language: add it to `web/src/i18n/config.ts` and
  `get-dictionary.ts`, then create its dictionary file.

## Legacy Django site

The old Django version lives in `legacy-django/`. See that folder's
`requirements.txt` to run it. It is no longer maintained.
