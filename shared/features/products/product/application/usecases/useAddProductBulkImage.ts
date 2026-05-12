import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addProductBulkImageFormValues } from '../../domain/addProductBulkImage.schema';
import { addProductBulkImage } from '../../infrastructure/addProductBulkImageApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useAddProductBulkImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: addProductBulkImageFormValues) =>
      addProductBulkImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-productById'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
