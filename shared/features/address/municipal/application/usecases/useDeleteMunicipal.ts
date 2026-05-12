import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteMunicipal } from '../../infrastructure/deleteMunicipalApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useDeleteMunicipal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMunicipal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Municipal'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
