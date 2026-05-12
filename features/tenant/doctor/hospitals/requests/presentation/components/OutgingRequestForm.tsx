'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useOutgoingRequestForm } from '../../domain/useOutgoingRequestForm';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { convertClinicsToItems } from '@/lib/clinicOptions';
import { useGetBranchByClinicId } from '@/features/tenant/organization/branch/application/usecases/useGetBranchByClinicId';
import { optionsConverter } from '@/lib/optionsConverter';

const OutgoingRequestForm = ({ initialValues, onClose }: any) => {
  const form = useOutgoingRequestForm(initialValues);
  const { watch } = form;

  const { clinicData, onSubmit, loading } = useRequestSubmit(onClose);
  const clinicId = watch('clinicId');
  const { data: branch } = useGetBranchByClinicId(clinicId);
  const branchData = branch?.data;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 items-center">
          <Combobox
            items={convertClinicsToItems(clinicData) || []}
            form={form}
            name="clinicId"
            label="Hospital Name"
            isRequired
          />
          <Combobox
            items={
              optionsConverter(
                branchData,
                (d) => d.name,
                (d) => d.id
              ) || []
            }
            form={form}
            name="branchId"
            label="Branch Name"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            name="designation"
            label="Designation"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            name="joiningDate"
            label="Join Date"
            type="date"
            isRequired
          />

          <div className="col-span-full">
            <FormTextArea form={form} name="remarks" label="Remarks" />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          {/* SUBMIT */}
          <CustomButton type="submit" disabled={loading} size="sm">
            {initialValues ? 'Update' : 'Save'}
          </CustomButton>

          {/* CLEAR */}
          <CustomButton
            type="button"
            variant="outline"
            disabled={loading}
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

export default OutgoingRequestForm;
