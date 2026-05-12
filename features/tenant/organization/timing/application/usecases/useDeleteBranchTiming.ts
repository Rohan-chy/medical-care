import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';
import { deleteBranchTiming } from '../../infrastructure/deleteBranchTimingApi.repo';

export const useDeleteBranchTiming = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBranchTiming,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-branchTimingByBranchId'],
      });
      toast.error(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
