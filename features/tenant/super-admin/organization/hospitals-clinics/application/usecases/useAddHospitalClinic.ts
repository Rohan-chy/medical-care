import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addHospitalClinic } from '../../infrastructure/addHospitalClinic';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddHospitalClinic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addHospitalClinic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-hospitalClinic'] });
      queryClient.invalidateQueries({ queryKey: ['get-tenant-requests'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
