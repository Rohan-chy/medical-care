import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createWard } from '../../infrastructure/createWardApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCreateWard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createWard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
