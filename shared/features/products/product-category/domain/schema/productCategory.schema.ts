import { z } from 'zod';

export const ProductCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  categoryId: z
    .string()
    .nullable()
    .transform((val) => {
      if (!val || val.trim() === '') return null; // empty or whitespace → null
      return val;
    })
    .refine(
      (val) =>
        !val ||
        /^[0-9a-fA-F-]{8}-[0-9a-fA-F-]{4}-[1-5][0-9a-fA-F-]{3}-[89abAB][0-9a-fA-F-]{3}-[0-9a-fA-F-]{12}$/.test(
          val
        ),
      {
        message: 'Invalid ProductCategory category',
      }
    ),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const createProductSchema = ProductCategorySchema;
export const updateteProductSchema = ProductCategorySchema.extend({
  id: z.string(),
});

/* ---------- Types ---------- */

export type ProductCategoryFormValues = z.infer<typeof ProductCategorySchema>;
