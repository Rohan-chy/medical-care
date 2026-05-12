import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadOrganizationBulkImage } from '../../infrastructure/uploadOrganizationBulkImageApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';

export const useUploadOrganizationBulkImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadOrganizationBulkImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-profile-organization'] });
      queryClient.invalidateQueries({ queryKey: ['get-clinicbyId'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
