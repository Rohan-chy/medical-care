import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';
import { deleteService } from '../../infrastructure/deleteServiceApi.repo';

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Service'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      getErrorMessage(error);
    },
  });
};
