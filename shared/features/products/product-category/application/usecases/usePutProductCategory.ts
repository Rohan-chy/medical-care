import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { putProductCategory } from '../../infrastructure/putProductCategoryApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const usePutProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putProductCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ProductCategory'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
