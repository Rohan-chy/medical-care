import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { uploadProductCategoryImage } from '../../infrastructure/uploadProductCategoryApi.repo';

export const useUploadProductCategoryImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadProductCategoryImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ProductCategory'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
