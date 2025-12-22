import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // === KATEGORISIERUNG ===
        tags: z.array(z.string()).optional(),
        series: z.string().optional(),
        part: z.number().optional(),
        
        // === TIMESTAMPS ===
        date: z.coerce.date().optional(),
        modified: z.coerce.date().optional(),
        
        // === AUTOR ===
        author: z.string().default('Steven Noack'),
        author_npub: z.string().optional(),
      }),
    }),
  }),
};
