import { z } from 'zod';

export const countrySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Country name is required'),
  code: z.string().min(1, 'Country code is required'),
  dialingCode: z.string().min(1, 'Dialing code is required'),
  sortingId: z
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export const createCountrySchema = countrySchema;
export const updateCountrySchema = countrySchema.extend({
  id: z.string(),
});

export type CountryFormValues = z.infer<typeof countrySchema>;
