import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  uploadDoctorCategoryImageFormValues,
  uploadDoctorCategoryImageSchema,
} from '../schema/uploadDoctorCategoryImage.schema';

export const uploadDoctorCategoryImageForm = () => {
  const form = useForm<uploadDoctorCategoryImageFormValues>({
    resolver: zodResolver(uploadDoctorCategoryImageSchema),
    defaultValues: {
      doctorCategoryId: '',
      image: '',
    },
  });
  return form;
};
