import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addBranchGallery } from '../infrastructure/addBranchGalleryApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddBranchGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBranchGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ownbranch'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
