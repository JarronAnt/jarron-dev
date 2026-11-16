# Jarron / Dev — Phase 1

A dark, editorial developer portfolio and technical journal built with Astro, TypeScript, and Tailwind CSS 4.

## Requirements

- Node.js 22.23.4+ (use a supported even-numbered LTS release, such as 24)
- npm

## Run locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Quality checks

```sh
npm run check
npm run build
npm run preview
```

## Pages

- `/` — introduction, featured projects, engineering topics
- `/writing/` — planned articles (content pipeline is Phase 2)
- `/projects/` — project catalog
- `/about/` — biography and links

## Edit projects

Update `src/data/projects.ts` to add, remove, or change project cards. Add `featured: true` to display a project on the homepage.

## Next phase

Phase 2: Astro content collections, MDX, article layout, syntax highlighting, and tags.
