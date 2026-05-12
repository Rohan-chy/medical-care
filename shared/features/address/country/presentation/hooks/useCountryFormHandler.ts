import { useCreateCountry } from '../../application/usecases/useCreateCountry';
import { useUpdateCountry } from '../../application/usecases/useUpdateCountry';
import {
  CountryFormValues,
  createCountrySchema,
  updateCountrySchema,
} from '../../domain/country.schema';

interface UseCountryFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useCountryFormHandler = ({
  onSuccess,
  form,
}: UseCountryFormControllerProps) => {
  const { mutate: createCountry, isPending: createPending } =
    useCreateCountry();
  const { mutate: updateCountry, isPending: updatePending } =
    useUpdateCountry();

  const submitCountry = (data: CountryFormValues) => {
    if (data.id) {
      // Update existing country
      const parsed = updateCountrySchema.parse(data);
      updateCountry(parsed, { onSuccess });
    } else {
      // Create new country
      const parsed = createCountrySchema.parse(data);
      createCountry(parsed, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitCountry,
    loading: createPending || updatePending,
    handleClear,
  };
};
