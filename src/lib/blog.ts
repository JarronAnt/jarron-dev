import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Draft posts are never listed or given public URLs, including in dev. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function getReadingMinutes(body: string | undefined): number {
  // Approximation: remove fenced code so lengthy examples don't inflate the time.
  const plainText = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#*_`~[\]()]/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** BASE_URL keeps all internal navigation working on a subpath deployment. */
export function sitePath(path = ''): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function postPath(post: Pick<BlogPost, 'id'>): string {
  return sitePath(`writing/${post.id}/`);
}

export function projectPath(slug: string): string {
  return sitePath(`projects/${slug}/`);
}

export function tagPath(tag: string): string {
  return `${sitePath('writing/')}?tag=${encodeURIComponent(tag)}`;
}
