import { deleteData } from '@/types/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteProductDynamicAttribute } from '../../infrastructure/deleteProductDynamicAttributeApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useDeleteProductDynamicAttribute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProductDynamicAttribute(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-productById'] });
      toast.error(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
