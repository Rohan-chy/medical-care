import { useAddService } from '../../application/usecases/useAddService';
import { useUpdateService } from '../../application/usecases/useUpdateService';
import {
  createServiceSchema,
  ServiceFormValues,
  updateServiceSchema,
} from '../../domain/service.schema';

export const useServiceFormHandler = (onClose?: () => void) => {
  //add
  const { mutateAsync: addService, isPending: createPending } = useAddService();
  //update
  const { mutateAsync: updateService, isPending: updatePending } =
    useUpdateService();

  const onSubmit = async (values: ServiceFormValues) => {
    try {
      if (values.id) {
        const parsed = updateServiceSchema.parse(values);
        await updateService(parsed);
      } else {
        const parsed = createServiceSchema.parse(values);
        await addService(parsed);
      }

      onClose?.();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    onSubmit,
    loading: createPending || updatePending,
  };
};
