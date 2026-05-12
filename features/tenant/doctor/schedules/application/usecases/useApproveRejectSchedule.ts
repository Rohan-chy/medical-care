import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { approveRejectSchedule } from '../../infrastructure/approveRejectScheduleApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { ApproveRejectFormValues } from '../../domain/schema/scheduleApproveReject.schema';

export const useApproveRejectSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ApproveRejectFormValues) => approveRejectSchedule(data),
    onSuccess: () => {
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
