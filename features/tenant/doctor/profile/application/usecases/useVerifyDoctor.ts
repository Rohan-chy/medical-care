import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { verifyDoctor } from '../../infrastructure/verifyDoctorApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useVerifyDoctor = () => {
  return useMutation({
    mutationFn: verifyDoctor,
    onSuccess: () => {
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
