import type { APIRoute } from 'astro';
import { getPublishedPosts, postPath } from '../lib/blog';
const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
export const GET: APIRoute = async ({ site }) => {
  const root = site ?? new URL('https://jarronant.github.io');
  const posts = await getPublishedPosts();
  const items = posts.map((p) => `<item><title>${escape(p.data.title)}</title><description>${escape(p.data.description)}</description><link>${escape(new URL(postPath(p), root).href)}</link><guid isPermaLink="true">${escape(new URL(postPath(p), root).href)}</guid><pubDate>${p.data.publishedAt.toUTCString()}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Jarron / Dev</title><link>${escape(new URL(import.meta.env.BASE_URL, root).href)}</link><description>Notes on compilers, LLVM, simulation systems, and emulation.</description><language>en-CA</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
