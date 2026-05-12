import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addProductImageFormValues } from '../../domain/addProductImage.schema';
import { addProductImage } from '../../infrastructure/addProductImageApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useAddProductImage = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: addProductImageFormValues) => addProductImage(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-product'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
