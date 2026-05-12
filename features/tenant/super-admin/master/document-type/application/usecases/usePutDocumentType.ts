import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { putDocumentType } from '../../infrastructure/putDocumentTypeApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const usePutDocumentType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putDocumentType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-DocumentType'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
