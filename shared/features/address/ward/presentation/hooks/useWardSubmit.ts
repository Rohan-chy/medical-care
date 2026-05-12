import { useGetMunicipal } from '../../../municipal/application/usecases/useGetMunicipal';
import { useCreateWard } from '../../application/usecases/useCreateWard';
import { useUpdateWard } from '../../application/usecases/useUpdateWard';
import {
  createWardSchema,
  updateWardSchema,
  WardFormValues,
} from '../../domain/ward.schema';

interface UseWardFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useWardSubmit = ({
  onSuccess,
  form,
}: UseWardFormControllerProps) => {
  const { mutate: createWard, isPending: createPending } = useCreateWard();
  const { mutate: updateWard, isPending: updatePending } = useUpdateWard();

  const { data: municipal } = useGetMunicipal() as {
    data?: { data: any[] };
  };

  const submitWard = (data: WardFormValues) => {
    if (data.id) {
      // Update existing Ward
      const parsed = updateWardSchema.parse(data);
      updateWard(parsed, { onSuccess });
    } else {
      // Create new Ward
      const parsed = createWardSchema.parse(data);
      createWard(parsed, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitWard,
    loading: createPending || updatePending,
    handleClear,
    municipal,
  };
};
