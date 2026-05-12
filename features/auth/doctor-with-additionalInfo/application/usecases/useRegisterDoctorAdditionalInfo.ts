import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { RegisterAdditionalInfoPayload } from '../../domain/registerDoctorAdditionalInfo.schema';
import { registerAdditionalInfoDoctor } from '../../infrastructure/registerAdditionalInfoApi.repo';
import { useRouter } from 'next/navigation';

export type RegisterAdditionalInfoResponse = {
  id: string;
  status: boolean;
  message: string;
};

export const useRegisterDoctorAdditionalInfo = () => {
  const router = useRouter();

  return useMutation<
    RegisterAdditionalInfoResponse,
    Error,
    RegisterAdditionalInfoPayload
  >({
    mutationFn: (data) => registerAdditionalInfoDoctor(data),
    onSuccess: (response) => {
      // response = { id, status, message }

      if (!response?.status) {
        // API says failure
        toast.error(response?.message || 'Registration failed.');
        return; // stop navigation
      }

      // API says success
      toast.success(
        'Registration successful! Please check your email to activate your account before logging in.'
      );

      router.replace('/doctor/login');
    },

    onError: () => {
      toast.error('Registration failed. Please try again later.');
    },
  });
};
