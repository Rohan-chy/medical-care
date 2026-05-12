import { Form } from '@/components/ui/form';
import {
  CreateClinicAllocationFormProps,
  useCreateClinicForm,
} from '../../domain/createClinicAllocation.schema';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useClinicAllocationHandle } from '../hooks/useClinicAllocationSubmitHandle';
import { optionsConverter } from '@/lib/optionsConverter';
import { useGetProfileOrganization } from '@/features/tenant/organization/profile/application/usecases/useGetProfileOrganization';
import { useGetOwnBranch } from '@/features/tenant/organization/branch/application/usecases/useGetOwnBranch';
import { useGetDoctorsByClinicIdAndBranchId } from '../../application/usecases/useGetDoctorsByClinicIdAndBranchId';

const CreateClinicAllocationForm = ({
  initialValues,
  onClose,
}: CreateClinicAllocationFormProps) => {
  const { data: clinicProfile } = useGetProfileOrganization();

  const form = useCreateClinicForm(initialValues, clinicProfile);

  const branchId = form.watch('branchId');

  const { onSubmit, loading } = useClinicAllocationHandle(onClose);

  const { data: doctorData } = useGetDoctorsByClinicIdAndBranchId(
    clinicProfile?.clinicId ?? '',
    branchId ?? ''
  );
  const doctors = doctorData?.data;

  const { data: branch } = useGetOwnBranch();
  const branchData = branch?.data;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-6">
          <Combobox
            form={form}
            items={
              optionsConverter(
                branchData,
                (d) => d.name,
                (d) => d.id
              ) || []
            }
            name="branchId"
            label="Branch Name"
            isRequired
          />

          <Combobox
            form={form}
            items={
              optionsConverter(
                doctors,
                (d) => d.doctorName,
                (d) => d.doctorId
              ) || []
            }
            name="doctorId"
            labelField="doctorName"
            label="Doctor Name"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            type="date"
            name="scheduleDate"
            label="Schedule Date"
            isRequired
          />
          <FloatingLabelFormInput
            form={form}
            type="time"
            name="scheduleTimeFrom"
            label="Time From"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            type="time"
            name="scheduleTimeTo"
            label="Time To"
            className="w-3/4"
            isRequired
          />
          <FloatingLabelFormInput
            form={form}
            type="number"
            name="maxPatientCap"
            label="Max.Patient"
            className="w-1/4"
            isRequired
          />
          <FloatingLabelFormInput
            form={form}
            type="number"
            name="quotedFee"
            label="Fee"
            className="w-1/4"
            isRequired
          />

          {/* {initialValues?.id && (
            <FormCheckbox name="isApproved" label="Approved" form={form} />
          )} */}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <CustomButton
            type="submit"
            size="sm"
            disabled={!form.formState.isValid || loading}
          >
            Save Schedule
          </CustomButton>

          <CustomButton
            type="button"
            variant="outline"
            size="sm"
            onClick={() => form.reset(initialValues || undefined)}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateClinicAllocationForm;
