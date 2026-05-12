import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadDoctorCategoryImage } from '../../infrastructure/uploadDoctorCategoryImageApi.repo';
import { uploadDoctorCategoryImageFormValues } from '../../domain/schema/uploadDoctorCategoryImage.schema';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUploadDoctorCategoryImage = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: uploadDoctorCategoryImageFormValues) =>
      uploadDoctorCategoryImage(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
