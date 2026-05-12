import { z } from 'zod';

export const DistrictSchema = z.object({
  id: z.string().optional(),
  stateId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'District name is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export const createDistrictSchema = DistrictSchema;

export const updateDistrictSchema = DistrictSchema.extend({
  id: z.string(),
});

export type DistrictFormValues = z.infer<typeof DistrictSchema>;
