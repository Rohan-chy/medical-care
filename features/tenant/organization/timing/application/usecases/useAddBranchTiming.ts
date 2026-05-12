import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';
import { addBranchTiming } from '../../infrastructure/addBranchTimingApi.repo';

export const useAddBranchTiming = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBranchTiming,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-branchTimingByBranchId'],
      });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
