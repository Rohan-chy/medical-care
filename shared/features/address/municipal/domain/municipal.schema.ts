import { z } from 'zod';

export const MunicipalSchema = z.object({
  id: z.string().optional(),
  districtId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'Municipal name is required'),
  type: z.string().min(1, 'Municipal Type is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export const createMunicipalSchema = MunicipalSchema;

export const updateMunicipalSchema = MunicipalSchema.extend({
  id: z.string(),
});

export type MunicipalFormValues = z.infer<typeof MunicipalSchema>;
