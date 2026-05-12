import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { putSalutation } from '../../infrastructure/putSalutationApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const usePutSalutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putSalutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-salutation'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
