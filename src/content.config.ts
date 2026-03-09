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
        
        // === MULTI-MODAL ===
        image: z.string().optional(),        // Hero/Banner-Bild
        heroImage: z.string().optional(),    // CDN URL (VisionFusen signiert)
        heroImageAlt: z.string().optional(), // Barrierefreie Bildbeschreibung
        heroImageHash: z.string().optional(), // SHA-256 Hash
        heroImageEvent: z.string().optional(), // Nostr Event ID des Bildes
        pHash: z.string().optional(),        // Perceptual Hash
        audio: z.string().optional(),        // Audio-Version URL
        audioDuration: z.string().optional(), // z.B. "12:34"
        
        // === NOSTR / SIGNATUR ===
        sig: z.string().optional(),          // Nostr Schnorr-Signatur
        note_id: z.string().optional(),      // Nostr Event ID (hex)
        naddr: z.string().optional(),        // Nostr addressable identifier
        
        // === SCHEMA.ORG ===
        schema_type: z.string().default('TechArticle'), // TechArticle | DefinedTerm
      }),
    }),
  }),
};
