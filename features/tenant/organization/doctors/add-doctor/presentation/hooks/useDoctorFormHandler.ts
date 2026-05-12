import { useGetSalutation } from '@/features/tenant/super-admin/master/salutation/application/usecases/useGetSalutation';
import { useAddDoctor } from '../../application/usecases/useAddDoctor';
import {
  AddDoctorFormValues,
  createAddDoctorSchema,
  UpdateDoctorFormValues,
  updateDoctorSchema,
} from '../../domain/addDoctor.schema';
import { useUpdateDoctor } from '../../application/usecases/useUpdateDoctor';

export const useDoctorFormHandler = ({ onClose }: any) => {
  const { data: salutations } = useGetSalutation();

  const { mutateAsync: create, isPending: createPending } = useAddDoctor();
  const { mutateAsync: update, isPending: updatePending } = useUpdateDoctor();

  const onSubmit = async (values: AddDoctorFormValues) => {
    try {
      const parsed = createAddDoctorSchema.parse(values);
      await create(parsed);

      onClose?.();
    } catch (err) {
      console.error(err);
    }
  };

  const onUpdateSubmit = async (values: UpdateDoctorFormValues) => {
    try {
      if (values.id) {
        const parsed = updateDoctorSchema.parse(values);
        await update(parsed);
      }

      onClose?.();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    onSubmit,
    onUpdateSubmit,
    loading: createPending || updatePending,
    salutationData: salutations?.data,
  };
};
