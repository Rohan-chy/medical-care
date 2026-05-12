import z from 'zod';
import { branchGallerySchema } from './branchGallery.schema';

export type branchGalleryDto = z.infer<typeof branchGallerySchema>;
