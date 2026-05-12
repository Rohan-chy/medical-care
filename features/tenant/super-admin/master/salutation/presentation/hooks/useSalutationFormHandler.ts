import { useCreateSalutation } from '../../application/usecases/useCreateSalutation';
import { usePutSalutation } from '../../application/usecases/usePutSalutation';
import {
  createSalutationSchema,
  SalutationFormValues,
  updateSalutationSchema,
} from '../../domain/salutation.schema';

type UseSalutationFormHandlerProps = {
  onClose?: () => void;
};

export const useSalutationFormHandler = ({
  onClose,
}: UseSalutationFormHandlerProps) => {
  const { mutate: createSalutation, isPending: createPending } =
    useCreateSalutation();

  const { mutate: putSalutation, isPending: patchPending } = usePutSalutation();

  const onSubmit = (values: SalutationFormValues) => {
    if ((values as any).id) {
      const parsed = updateSalutationSchema.parse(values);
      putSalutation(parsed, {
        onSuccess: () => onClose?.(),
      });
    } else {
      const parsed = createSalutationSchema.parse(values);
      createSalutation(parsed, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
