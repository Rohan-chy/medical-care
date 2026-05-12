import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createState } from '../../infrastructure/createStateApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCreateState = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createState,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-State'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
