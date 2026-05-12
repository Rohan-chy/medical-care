import { z } from 'zod';

export const baseBranchSchema = z.object({
  id: z.string().optional(), // optional only for editing
  name: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
  contactNo: z.string().regex(/^\d{10}$/, 'Must be 10 digits'),
  latitude: z.number(),
  longitude: z.number(),
});

export const createBranchSchema = baseBranchSchema;

export const updateBranchSchema = baseBranchSchema.extend({
  id: z.string(),
});

export type BranchFormValues = z.infer<typeof baseBranchSchema>;
