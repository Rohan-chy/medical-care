import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';
import { deleteData } from '@/types/delete';
import { deleteBranch } from '../../infrastructure/deleteBranchApi.repo';

export const useDeleteBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: deleteData) => deleteBranch(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ownbranch'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
