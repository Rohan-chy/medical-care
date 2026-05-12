import { z } from 'zod';

export const uploadProductCategoryImageSchema = z.object({
  id: z.string().optional(),
  productCategoryId: z.string().uuid('Invalid ProductCategory ID'),
  image: z.any().refine((file) => file instanceof File || file === undefined, {
    message: 'Invalid file',
  }),
});

export type uploadProductCategoryImageFormValues = z.infer<
  typeof uploadProductCategoryImageSchema
>;
