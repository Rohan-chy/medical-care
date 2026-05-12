import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  uploadOrganizationBulkImageFormValues,
  uploadOrganizationBulkImageSchema,
} from '../schema/uploadOrganizationBulkImages.schema';

export const uploadOrganizationBulkImageForm = () => {
  const form = useForm<uploadOrganizationBulkImageFormValues>({
    resolver: zodResolver(uploadOrganizationBulkImageSchema),
    defaultValues: {
      clinicId: '',
      image: [], // default as empty array for multiple files
    },
  });
  return form;
};
