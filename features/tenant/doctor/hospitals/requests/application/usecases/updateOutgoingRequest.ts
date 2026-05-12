import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateOutgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';
import { updateOutgoingRequest } from '../../infrastructure/updateOutgoingRequestApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateOutgoingRequestSchemaFormValues) =>
      updateOutgoingRequest(data),
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
