# Deployment guide

## 1. Prepare the repository

This site defaults to a repository called **`jarron-dev`** under GitHub username **`JarronAnt`**.

1. On GitHub, create an empty public repository named `jarron-dev` (do not add a README from GitHub).
2. Open the extracted `jarron-dev` directory locally.
3. Ensure Node 24 is active, then run:

```bash
npm install
npm run check:all
```

4. Verify the local preview at `http://localhost:4321/jarron-dev/` using `npm run dev`, or check the built site using `npm run preview`.
5. Commit and push the source **including the generated `package-lock.json`**:

```bash
git init
git add .
git commit -m "feat: launch developer blog and engineering portfolio"
git branch -M main
git remote add origin https://github.com/JarronAnt/jarron-dev.git
git push -u origin main
```

## 2. Enable GitHub Pages

In the GitHub repository, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The included `.github/workflows/deploy.yml` builds the Astro site and deploys the `dist/` directory whenever you push to `main`. Look at the Actions tab for the job log and deployment URL.

Default target: **https://jarronant.github.io/jarron-dev/**.

If the repo name changes, update the `BASE_PATH` repository variable (below) accordingly.

## 3. Custom domain (optional)

In **Settings → Pages**, set the custom domain and configure DNS according to GitHub's current instructions. In **Settings → Secrets and variables → Actions → Variables**, add:

- `SITE_URL` = `https://blog.example.com` (your exact domain and scheme)
- `BASE_PATH` = `/`

Then rerun the workflow or push to `main`. These affect internal links, canonical URLs, RSS, sitemap, metadata and the generated site base path.

To test a custom domain configuration locally:

```bash
SITE_URL=https://blog.example.com BASE_PATH=/ npm run check:all
```

A domain name in this guide is an example; it does not mean one has been registered or configured.

## 4. After launch

- Visit the homepage, each project page, and a few articles on desktop and mobile.
- Test tag filters, article search, code-copy buttons, and relative links.
- Open `rss.xml` and `sitemap.xml` at the configured base path.
- Review each first-person article and update publication dates if you change the launch schedule.
- If adding new projects, link their source GitHub repo and update accurate status/milestones.
- To publish updates, edit `.mdx` files, commit, and push to `main`.

## Troubleshooting

**`npm run dev` shows a 404 at `/`** — the base path is `/jarron-dev/`. Open `/jarron-dev/`, or start with `BASE_PATH=/ npm run dev`.

**404s after GitHub Pages deploy** — verify repo name, Pages source, and Actions `BASE_PATH`. A project Pages URL needs `/<repo>/`; a custom domain normally needs `/`.

**`npm ci` fails** — the workflow uses `npm install` so a missing lockfile is tolerated. Generate and commit `package-lock.json` for reproducibility.

**Build fails due to Node version** — use Node 24 LTS; the repository's `.node-version` documents this preference.

**Content validation fails** — run `npm run lint:content`; check frontmatter and the project slug referenced by a post. Run the full `npm run check:all` after correcting it.
