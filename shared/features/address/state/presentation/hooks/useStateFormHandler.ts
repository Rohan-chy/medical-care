import { useGetCountry } from '../../../country/application/usecases/useGetCountry';
import { useCreateState } from '../../application/usecases/useCreateState';
import { useUpdateState } from '../../application/usecases/useUpdateState';
import {
  createStateSchema,
  StateFormValues,
  updateteStateSchema,
} from '../../domain/state.schema';

interface UseStateFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useStateFormHandler = ({
  onSuccess,
  form,
}: UseStateFormControllerProps) => {
  const { mutate: createState, isPending: createPending } = useCreateState();
  const { mutate: updateState, isPending: updatePending } = useUpdateState();
  const { data: country } = useGetCountry();

  const submitState = (data: StateFormValues) => {
    if (data.id) {
      // Update existing State
      const parsed = updateteStateSchema.parse(data);
      updateState(parsed, { onSuccess });
    } else {
      // Create new State
      const parsed = createStateSchema.parse(data);
      createState(parsed, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitState,
    loading: createPending || updatePending,
    handleClear,
    country,
  };
};
