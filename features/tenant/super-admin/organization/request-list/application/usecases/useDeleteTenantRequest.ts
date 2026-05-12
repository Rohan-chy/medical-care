import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTenantRequest } from '../../infrastructure/deleteTenantRequestApi.repo';
import { toast } from 'sonner';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';

export const useDeleteTenantRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTenantRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenant-requests'] });
      toast.error(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
