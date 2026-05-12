import { z } from 'zod';

export const baseServiceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),

  price: z.number().min(0, 'Price must be 0 or greater'),

  type: z.string().min(1, 'Type is required'),

  branchId: z.string().uuid('Branch is required'),

  description: z.string().optional(),

  durationInMinutes: z.number().min(0, 'Duration must be 0 or greater'),

  isAvailable: z.boolean().optional(),

  isOnlineAvailable: z.boolean().optional(),
});

export const createServiceSchema = baseServiceSchema;

export const updateServiceSchema = baseServiceSchema.extend({
  id: z.string(),
});

export const responseServiceItemSchema = baseServiceSchema.extend({
  id: z.string(),
});

export const responseServiceSchema = z.object({
  data: z.array(responseServiceItemSchema),
});

//types
export type ServiceFormValues = z.infer<typeof baseServiceSchema>; //for form
