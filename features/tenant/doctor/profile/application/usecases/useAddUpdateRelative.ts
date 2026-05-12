import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveRelativesPayload } from '../../domain/schema/doctorRelative.schema';
import { addUpdateRelative } from '../../infrastructure/addUpdateRelativeApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddUpdateRelative = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveRelativesPayload) => addUpdateRelative(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
