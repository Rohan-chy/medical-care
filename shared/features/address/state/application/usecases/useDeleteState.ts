import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteState } from '../../infrastructure/deleteStateApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useDeleteState = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteState(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-State'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
