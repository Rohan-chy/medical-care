// import { useCreateTenant } from '@/features/tenant/super-admin/tenants/application/usecases/useCreateTenant';
import { useRequestTenant } from '../../application/usecases/useRequestTenant';
import { OrganizationRegistrationFormValues } from '../../domain/tenantRequest.schema';
import { useHospitalClinicFormHandler } from '../../../hospitals-clinics/presentation/hooks/useHospitalClinicFormHandler';
import { HospitalClinicFormValues } from '../../../hospitals-clinics/domain/hospitalClinic.schema';

type UseRequestHandleProps = {
  onSuccess?: () => void;
};

export const useRequestHandle = ({ onSuccess }: UseRequestHandleProps) => {
  const { mutate, isPending } = useRequestTenant();
  // const { mutate: createTenant, isPending: pendingCreate } = useCreateTenant();
  const { createHospitalClinic, loading: clinicLoading } =
    useHospitalClinicFormHandler();

  const onSubmit = async (values: OrganizationRegistrationFormValues) => {
    const { companyName, email, password, isApproved, address, phoneNumber } =
      values || {};

    mutate(values, {
      onSuccess: async () => {
        if (isApproved) {
          await createHospitalClinic({
            name: companyName,
            email,
            password,
            location: address,
            contactNo: phoneNumber,
          } as HospitalClinicFormValues);
        }

        onSuccess?.();
      },
    });
  };

  return {
    onSubmit,
    loading: isPending || clinicLoading,
  };
};
