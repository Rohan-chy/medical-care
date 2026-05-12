import { useCreateDocumentType } from '../../application/usecases/useCreateDocumentType';
import { usePutDocumentType } from '../../application/usecases/usePutDocumentType';
import {
  createDocumentTypeSchema,
  DocumentTypeFormValues,
  updateDocumentTypeSchema,
} from '../../domain/documentType.schema';

type UseDocumentTypeFormHandlerProps = {
  onClose?: () => void;
};

export const useDocumentTypeFormHandler = ({
  onClose,
}: UseDocumentTypeFormHandlerProps) => {
  const { mutate: createDocumentType, isPending: createPending } =
    useCreateDocumentType();

  const { mutate: putDocumentType, isPending: patchPending } =
    usePutDocumentType();

  const onSubmit = (values: DocumentTypeFormValues) => {
    if (values.id) {
      const parsed = updateDocumentTypeSchema.parse(values);

      putDocumentType(parsed, {
        onSuccess: () => onClose?.(),
      });
    } else {
      const parsed = createDocumentTypeSchema.parse(values);
      createDocumentType(parsed, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
