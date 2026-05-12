import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { canceleOutgoingRequest } from '../../infrastructure/cancelOutgoingApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCancelOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => canceleOutgoingRequest(id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-outgoingRequest-doctor'],
      });
      toast.success('Request Cancelled Successfully.');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
