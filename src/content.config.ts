import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const drivingSchools = defineCollection({
  loader: file('src/content/driving-schools.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      street: z.string(),
      zip: z.string(),
      city: z.string(),
      // free text; each distinct region gets its own page
      region: z.string(),
      url: z.url(),
      logo: image(),
    }),
});

const reviews = defineCollection({
  loader: file('src/content/reviews.yaml'),
  schema: z.object({
    name: z.string(),
    platform: z.enum(['ios', 'android']),
    stars: z.number().int().min(1).max(5),
    date: z.coerce.date(),
    url: z.url(),
    text: z.string(),
  }),
});

export const collections = { drivingSchools, reviews };
