import { z } from 'zod';

export const branchGallerySchema = z.object({
  branchId: z.string().uuid('Invalid Branch'),
  image: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file instanceof File, { message: 'Invalid file' })
    )
    .optional()
    .or(z.undefined()),
});

export const createBranchGallerySchema = branchGallerySchema;

export type branchGalleryFormValues = z.infer<typeof branchGallerySchema>;
