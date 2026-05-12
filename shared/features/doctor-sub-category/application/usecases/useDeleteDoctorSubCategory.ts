import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { deleteDoctorSubCategory } from '../../infrastructure/deleteDoctorSubCategoryApi.repo';

export const useDeleteDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteDoctorSubCategory(id),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
