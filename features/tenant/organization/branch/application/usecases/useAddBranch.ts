import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { addBranch } from '../../infrastructure/addBranchApi.repo';
import { MESSAGES } from '@/core/messages/messages';

export const useAddBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBranch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ownbranch'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
