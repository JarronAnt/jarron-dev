import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { getPublishedPosts, postPath, projectPath, sitePath } from '../lib/blog';
const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://jarronant.github.io');
  const posts = await getPublishedPosts();
  const urls = [sitePath(), sitePath('writing/'), sitePath('projects/'), sitePath('about/'),
    ...projects.map((project) => projectPath(project.slug)), ...posts.map(postPath)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${escape(new URL(url, origin).href)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
