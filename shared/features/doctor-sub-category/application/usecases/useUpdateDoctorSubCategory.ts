import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { updateDoctorSubCategory } from '../../infrastructure/updateDoctoryaSubCategoryApi.repo';

export const useUpdateDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: updateDoctorSubCategory,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
