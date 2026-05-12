import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { addDoctorSubCategory } from '../../infrastructure/addDoctorSubCategoryApi.repo';

export const useAddDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: addDoctorSubCategory,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
