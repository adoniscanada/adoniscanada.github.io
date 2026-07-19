import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { BlogSchema } from "./schemas/blog.zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: BlogSchema,
});

export const collections = { blog };
