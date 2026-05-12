import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addDoctorCategory } from '../../infrastructure/addDoctorCategoryApi.repo';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddDoctorCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: addDoctorCategory,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
