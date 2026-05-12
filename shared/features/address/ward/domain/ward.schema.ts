import { z } from 'zod';

export const WardSchema = z.object({
  id: z.string().optional(),
  municipalityId: z.string().uuid('Country is required'),
  wardNumber: z
    .number()
    .int('Ward must be an integer')
    .nonnegative('Ward must be >= 0'),
  isActive: z.boolean().optional(),
});

export const createWardSchema = WardSchema;

export const updateWardSchema = WardSchema.extend({
  id: z.string(),
});

export type WardFormValues = z.infer<typeof WardSchema>;
