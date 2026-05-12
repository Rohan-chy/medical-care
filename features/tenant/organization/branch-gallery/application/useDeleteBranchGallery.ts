import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { deleteBranchGallery } from '../infrastructure/deleteBranchGalleryApi.repo';

export const useDeleteBranchGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBranchGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ownbranch'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
