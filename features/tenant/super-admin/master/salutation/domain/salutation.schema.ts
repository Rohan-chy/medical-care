import { z } from 'zod';

export const salutationSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),

  description: z.string().optional(),
});

export const createSalutationSchema = salutationSchema;

export const updateSalutationSchema = salutationSchema.extend({
  id: z.string(),
});

export type SalutationFormValues = z.infer<typeof salutationSchema>;
