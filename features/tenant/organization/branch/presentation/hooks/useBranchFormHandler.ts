import { useAddBranch } from '../../application/usecases/useAddBranch';
import { useUpdateBranch } from '../../application/usecases/useUpdateBranch';
import {
  BranchFormValues,
  createBranchSchema,
  updateBranchSchema,
} from '../../domain/branch.schema';

export const useBranchFormHandler = ({ onClose }: any) => {
  const { mutateAsync: create, isPending: createPending } = useAddBranch();
  const { mutateAsync: update } = useUpdateBranch();

  const onSubmit = async (values: BranchFormValues) => {
    try {
      if (values.id) {
        const parsed = updateBranchSchema.parse(values);

        await update(parsed);
      } else {
        const parsed = createBranchSchema.parse(values);

        await create(parsed);
      }

      onClose?.();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    onSubmit,
    loading: createPending,
  };
};
