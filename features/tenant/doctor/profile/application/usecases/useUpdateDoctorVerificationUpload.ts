import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctorVerificationUploadFormValues } from '../../domain/schema/updateDoctorVerificationUpload.schema';
import { updateDoctorVerificationUpload } from '../../infrastructure/updateDoctorVerificationUpload';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateDoctorVerificationUpload = () => {
  return useMutation({
    mutationFn: (data: updateDoctorVerificationUploadFormValues) =>
      updateDoctorVerificationUpload(data),
    onSuccess: () => {
      //   toast.success('Profile updated Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
