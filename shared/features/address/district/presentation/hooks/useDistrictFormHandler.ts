import { useGetState } from '../../../state/application/usecases/useGetState';
import { useCreateDistrict } from '../../application/usecases/useCreateDistrict';
import { useUpdateDistrict } from '../../application/usecases/useUpdateDistrict';
import {
  createDistrictSchema,
  DistrictFormValues,
  updateDistrictSchema,
} from '../../domain/district.schema';

interface UseDistrictFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useDistrictFormHandler = ({
  onSuccess,
  form,
}: UseDistrictFormControllerProps) => {
  const { mutate: createDistrict, isPending: createPending } =
    useCreateDistrict();
  const { mutate: updateDistrict, isPending: updatePending } =
    useUpdateDistrict();
  const { data: state } = useGetState();

  const submitDistrict = (data: DistrictFormValues) => {
    if (data.id) {
      // Update existing District
      const parsed = updateDistrictSchema.parse(data);
      updateDistrict(parsed, { onSuccess });
    } else {
      const parsed = createDistrictSchema.parse(data);
      // Create new District
      createDistrict(parsed, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitDistrict,
    loading: createPending || updatePending,
    handleClear,
    state,
  };
};
