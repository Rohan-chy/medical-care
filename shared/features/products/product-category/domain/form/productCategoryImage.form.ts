import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  uploadProductCategoryImageFormValues,
  uploadProductCategoryImageSchema,
} from '../schema/uploadProductCategoryImage.schema';

export const useUploadProductCategoryImageForm = () => {
  const form = useForm<uploadProductCategoryImageFormValues>({
    resolver: zodResolver(uploadProductCategoryImageSchema),
    defaultValues: {
      productCategoryId: '',
      image: '',
    },
  });
  return form;
};
