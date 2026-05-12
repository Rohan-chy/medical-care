import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctorSchedule } from '../../infrastructure/updateSchedulesApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useUpdateDoctorSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDoctorSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorOutgoingSchedule'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorIncomingSchedule'],
      });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
