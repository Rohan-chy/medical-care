import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';
import { updateBranchTiming } from '../../infrastructure/updateBranchTimingApi.repo';

export const useUpdateBranchTiming = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBranchTiming,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-branchTimingByBranchId'],
      });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
