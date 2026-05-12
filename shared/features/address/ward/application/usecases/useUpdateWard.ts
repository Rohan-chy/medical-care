import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateWard } from '../../infrastructure/updateWardApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateWard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateWard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
