import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addUpdateResearch } from '../../infrastructure/addUpdateResearchApi.repo';
import { SaveResearchPayload } from '../../domain/schema/doctorResearch.schema';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddUpdateResearch = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveResearchPayload) => addUpdateResearch(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
