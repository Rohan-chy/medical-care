import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctorVerification } from '../../infrastructure/updateDoctorVerificationApi.repo';
import { DoctorProfileVerificationFormValues } from '@/features/tenant/super-admin/doctor/doctor-verification/domain/requestVerification.schema';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateDoctorVerification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorProfileVerificationFormValues) =>
      updateDoctorVerification(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
