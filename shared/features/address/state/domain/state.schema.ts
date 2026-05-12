import { z } from 'zod';

export const stateSchema = z.object({
  id: z.string().optional(),
  countryId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'State name is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export const createStateSchema = stateSchema;

export const updateteStateSchema = stateSchema.extend({
  id: z.string(),
});

export type StateFormValues = z.infer<typeof stateSchema>;
