import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { doctorProfileVerification } from '../../infrastructure/doctorProfileVerificationApi.repo';
import { DoctorProfileVerificationFormValues } from '../../domain/requestVerification.schema';

export const useDoctorProfileVerification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorProfileVerificationFormValues) =>
      doctorProfileVerification(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctors'] });
      queryClient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      queryClient.invalidateQueries({ queryKey: ['get-doctorById'] });
      toast.success('Doctor Verified Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
