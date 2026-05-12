import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteWard } from '../../infrastructure/deletWardApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useDeleteWard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteWard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
