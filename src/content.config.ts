import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(3),
    description: z.string().min(15),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),
    project: z.string().optional(), // Matches a `slug` in src/data/projects.ts
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
