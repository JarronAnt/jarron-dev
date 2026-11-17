import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Defaults target https://jarronant.github.io/jarron-dev/.
// Use BASE_PATH=/ and SITE_URL=https://your-domain.example for a custom domain.
const site = process.env.SITE_URL || 'https://jarronant.github.io';
const base = process.env.BASE_PATH || '/jarron-dev/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: { syntaxHighlight: 'shiki', shikiConfig: { theme: 'github-dark' } },
  vite: { plugins: [tailwindcss()] },
});
