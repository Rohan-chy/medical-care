import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveNomineesPayload } from '../../domain/schema/doctorNominee.schema';
import { addUpdateNominee } from '../../infrastructure/addUpdateNomineeApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddUpdateNominee = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveNomineesPayload) => addUpdateNominee(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
