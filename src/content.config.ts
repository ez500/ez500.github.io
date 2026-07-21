import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Blog collection. Add a post by dropping a Markdown file into
 * `src/content/blog/` — the filename (minus `.md`) becomes its URL slug
 * (`/blog/<filename>`). Frontmatter must match the schema below.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
