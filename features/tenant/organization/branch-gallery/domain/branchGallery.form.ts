import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  branchGalleryFormValues,
  branchGallerySchema,
} from './branchGallery.schema';

export const useBranchGalleryForm = () => {
  const form = useForm<branchGalleryFormValues>({
    resolver: zodResolver(branchGallerySchema),
    defaultValues: {
      branchId: '',
      image: [], // default as empty array for multiple files
    },
  });
  return form;
};
