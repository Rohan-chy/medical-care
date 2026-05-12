import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctor } from '../../infrastructure/updateDoctorApi.repo';
import { UpdateDoctorPayload } from '../../domain/schema/updateDoctor.schema';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateDoctor = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateDoctorPayload) => updateDoctor(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-profile'] });
      // toast.success('Data updated Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
