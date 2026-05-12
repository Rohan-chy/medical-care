import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateState } from '../../infrastructure/updateStateApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateState = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateState,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-State'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
