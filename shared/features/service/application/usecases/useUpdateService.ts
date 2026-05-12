import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';
import { updateService } from '../../infrastructure/updateServiceApi.repo';

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Service'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      getErrorMessage(error);
    },
  });
};
