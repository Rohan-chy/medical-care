import { useGetDistrict } from '../../../district/application/usecases/useGetDistrict';
import { useCreateMunicipal } from '../../application/usecases/useCreateMunicipal';
import { useUpdateMunicipal } from '../../application/usecases/useUpdateMunicipal';
import {
  createMunicipalSchema,
  MunicipalFormValues,
  updateMunicipalSchema,
} from '../../domain/municipal.schema';

interface UseMunicipalFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useMunicipalFormHandler = ({
  onSuccess,
  form,
}: UseMunicipalFormControllerProps) => {
  const { mutate: createMunicipal, isPending: createPending } =
    useCreateMunicipal();
  const { mutate: updateMunicipal, isPending: updatePending } =
    useUpdateMunicipal();

  const { data: district } = useGetDistrict() as {
    data?: { data: any[] };
  };

  const submitMunicipal = (data: MunicipalFormValues) => {
    if (data.id) {
      // Update existing Municipal
      const parsed = updateMunicipalSchema.parse(data);
      updateMunicipal(parsed, { onSuccess });
    } else {
      // Create new Municipal
      const parsed = createMunicipalSchema.parse(data);
      createMunicipal(parsed, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitMunicipal,
    loading: createPending || updatePending,
    handleClear,
    district,
  };
};
