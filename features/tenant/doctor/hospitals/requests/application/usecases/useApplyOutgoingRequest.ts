import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { applyOutgoingRequest } from '../../infrastructure/applyOutgoingRequestApli.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useApplyOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => applyOutgoingRequest(id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-outgoingRequest-doctor'],
      });
      toast.success('Requested Successfully. Will be verified soon.');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
