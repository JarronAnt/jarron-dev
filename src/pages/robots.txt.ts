import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://jarronant.github.io');
  const base = import.meta.env.BASE_URL;
  const content = `User-agent: *
Allow: /
Sitemap: ${new URL(`${base}sitemap.xml`, origin).href}
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
