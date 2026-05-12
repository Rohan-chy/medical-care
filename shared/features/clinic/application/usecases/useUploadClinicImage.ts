import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadClinicImage } from '../../infrastructure/uploadClinicImageApi.repo';
import { updateClinicImageFormValues } from '../../domain/forms/updateClinicImageForm';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUploadClinicImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateClinicImageFormValues) => uploadClinicImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-profile-organization'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
