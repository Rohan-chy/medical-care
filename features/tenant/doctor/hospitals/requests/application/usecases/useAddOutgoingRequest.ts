import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addOutgoingRequest } from '../../infrastructure/addOutgoingRequestApi.repo';
import { outgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: outgoingRequestSchemaFormValues) =>
      addOutgoingRequest(data),
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
