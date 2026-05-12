import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteOrganizationBulkImage } from '../../infrastructure/deleteOrganizationBulkImageApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useDeleteOrganizationBulkImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteOrganizationBulkImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinicyId'] });
      toast.error(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
