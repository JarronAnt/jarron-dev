# Jarron / Dev

A finished, static developer blog and engineering portfolio for [Jarron Anthonipillai](https://github.com/JarronAnt). Built with **Astro 6**, TypeScript, **Tailwind 4**, and MDX. Designed as a fast, dark, editorial home for technical writing about compilers, LLVM, C++ simulations, and emulators.

## Features

- Responsive Home, Writing, Projects, About, and 404 pages
- **Nine** source-grounded, fully written launch articles covering MicroCC (Phase 2B), OptForge (Phase 1), ASCII Universe (Phase 6), and Rusty8 (completed project)
- Six project case-study pages with status, implementation highlights, system diagrams, and next milestones
- Strongly typed Astro content collections and MDX authoring
- Search and topic filtering (all in-browser; no API or database)
- Published/draft article support, series navigation, reading time, dates, tags, related posts
- Shiki-highlighted code, copy buttons, table of contents, and copy-link sharing
- Canonical URLs, Open Graph/Twitter metadata, JSON-LD, sitemap, RSS, and robots endpoint
- GitHub Pages deployment workflow, supporting either repository subpaths or a custom domain
- Content QA script, skip link, keyboard focus, reduced-motion support

## Requirements

- Node.js **24 LTS** recommended (minimum Node 22.23.4)
- npm

## Quick start

```bash
npm install
npm run dev
```

**IMPORTANT:** the project's default `BASE_PATH` is `/jarron-dev/` to match a GitHub Pages repository named `jarron-dev`. When running locally, open **http://localhost:4321/jarron-dev/**. If you prefer local root `/`, run:

```bash
BASE_PATH=/ npm run dev
```

Then open http://localhost:4321/.

### Validate and build

```bash
npm run lint:content    # checks posts/frontmatter/project links
npm run check           # Astro/TypeScript diagnostics
npm run build           # production static site in dist/
npm run check:all       # all three above
npm run preview         # preview the built production site
```

`npm install` creates `package-lock.json`. Commit that file in your repository for reproducible installs. No `node_modules`, lockfile, or `dist/` directory is bundled in the ZIP.

**QA status:** metadata/content checks and JavaScript syntax checks were executed successfully before packaging. A complete Astro build was not run in the packaging environment because the package registry is not accessible; **run `npm run check:all` locally before deploying**.

## Nine published articles

| File | Project | Focus |
| --- | --- | --- |
| `microcc-from-source-to-machine-code.mdx` | MicroCC | Lexer, parser, AST, AArch64 compiler pipeline |
| `microcc-precedence-and-short-circuiting.mdx` | MicroCC | Precedence, conditional branches, tests |
| `optforge-phase-one-llvm-pass.mdx` | OptForge | Plugin build, LLVM IR, pass registration |
| `optforge-identity-rewrites-and-testing.mdx` | OptForge | Identity rules and FileCheck |
| `ascii-universe-six-phases-of-simulation.mdx` | ASCII Universe | Phases 1–6 architecture |
| `ascii-universe-procedural-worlds.mdx` | ASCII Universe | Phase 5.5 world generation |
| `ascii-universe-construction-system.mdx` | ASCII Universe | Phase 6 reservations, hauling, building |
| `rusty8-building-a-chip8-interpreter.mdx` | Rusty8 | CPU state, decoding, core/frontend architecture |
| `rusty8-rendering-and-instruction-semantics.mdx` | Rusty8 | Drawing, input, timing, limitations |

**Editorial note:** These are publication-ready **starting drafts** based on the public GitHub repositories reviewed on November 16, 2026. Technical claims and code examples are linked to the repositories. First-person commentary and publication dates are draft editorial language; read through it and personalize it before making the site public. Where diagrams or code are conceptual rather than exact excerpts, they are labeled accordingly.

## How to publish a new article

Create a file in `src/content/blog/`, e.g. `building-my-first-analysis-pass.mdx`:

````mdx
---
title: "Building My First Analysis Pass"
description: "An experiment with LLVM analysis in my optimization framework."
publishedAt: 2026-11-16
tags: ["LLVM", "C++", "Optimization"]
project: optforge
series: "Building OptForge"
seriesOrder: 3
draft: false
---

## The problem

Explain what you wanted to learn and why it matters.

## The architecture

Describe your approach, key data structures, and tradeoffs.

## Implementation

```cpp
// Code is highlighted automatically.
```

## Verification

Document test commands and expected behavior.

## What I learned

Be explicit about limitations, unresolved issues, and next steps.

**Source:** [OptForge](https://github.com/JarronAnt/OptForge).
````

**Frontmatter:** `title`, `description`, `publishedAt`, and a nonempty `tags` array are required. `project`, `series`, `seriesOrder`, `updatedAt`, and `draft` are optional. The `project` value must match a slug in `src/data/projects.ts`. Use `draft: true` to exclude a post from public routes, RSS, sitemap, and listings.

The filename determines its URL: `name.mdx` → `/writing/name/` beneath the deployment base path. Series entries are sorted using `seriesOrder`. Dates are displayed in UTC to avoid timezone-dependent ordering.

### Optional MDX callouts

```mdx
import Note from '../../components/content/Note.astro';

<Note kind="tip" title="Implementation note">
  Explain a useful discovery.
</Note>
```

Use `kind="note"`, `kind="tip"`, or `kind="warning"`.

## Adding or editing project pages

Edit `src/data/projects.ts`. `slug` controls the URL and binds posts to the project. `featured: true` puts the project on the home page. The case-study page reads implementation highlights, architecture, and next steps from the same object. **Do not mark future features as implemented.**

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for full steps. The workflow file is `.github/workflows/deploy.yml`. The default published URL is:

**https://jarronant.github.io/jarron-dev/**

This URL is a deployment *target*, **not a claim the site is already online**.

## Source tree

```text
jarron-dev/
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   └── og-cover.svg
├── scripts/check-content.mjs
├── src/
│   ├── components/             # Navigation, cards, notes
│   ├── content/blog/           # Nine MDX articles
│   ├── content.config.ts       # Validated content schema
│   ├── data/projects.ts        # Six project case studies
│   ├── layouts/BaseLayout.astro
│   ├── lib/blog.ts
│   ├── pages/                  # Dynamic articles/project URLs, RSS, sitemap
│   └── styles/global.css
├── astro.config.mjs
├── package.json
├── DEPLOYMENT.md
└── README.md
```

## Technical choices

There is **no CMS, database, authentication, analytics tracker, or required JavaScript UI framework**. Articles and projects live in Git, which is well-suited to writing alongside active development. The search/filter script and copy buttons are progressive enhancements; pages remain readable without JavaScript.
