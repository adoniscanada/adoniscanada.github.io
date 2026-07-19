import { z } from "astro/zod";

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export type Blog = z.infer<typeof BlogSchema>;
