import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateOutgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';
import { updateIncomingRequest } from '../../infrastructure/updateIncomingRequestApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useUpdateIncomingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateOutgoingRequestSchemaFormValues) =>
      updateIncomingRequest(data),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-incomingRequest-doctor'],
        refetchType: 'all',
      });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
