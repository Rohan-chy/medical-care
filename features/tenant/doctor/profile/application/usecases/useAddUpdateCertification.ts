import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addUpdateCertification } from '../../infrastructure/addUpdateCertification';
import { SaveCertificationsPayload } from '../../domain/schema/doctorCertification.schema';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddUpdateCertification = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveCertificationsPayload) =>
      addUpdateCertification(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
