import { useAddHospitalClinic } from '../../application/usecases/useAddHospitalClinic';
import { mapFormToCreateDto } from '../../application/mapper/mapFormToCreateDto';
import { HospitalClinicFormValues } from '../../domain/hospitalClinic.schema';

export const useHospitalClinicFormHandler = () => {
  const { mutateAsync: create, isPending: createPending } =
    useAddHospitalClinic();

  const createHospitalClinic = async (values: HospitalClinicFormValues) => {
    return await create(mapFormToCreateDto(values));
  };

  const onSubmit = async (values: HospitalClinicFormValues) => {
    try {
      if (!values.id) {
        await createHospitalClinic(values);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    onSubmit,
    createHospitalClinic,
    loading: createPending,
  };
};
