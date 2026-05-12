import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createSalutation } from '../../infrastructure/createSalutationApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCreateSalutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSalutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-salutation'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
