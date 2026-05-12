import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useServiceForm } from '../../domain/service.form';
import { useServiceFormHandler } from '../hooks/useServiceFormHandler';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { Combobox } from '@/components/custom-components/combobox';
import { optionsConverter } from '@/lib/optionsConverter';
import { useGetOwnBranch } from '@/features/tenant/organization/branch/application/usecases/useGetOwnBranch';

const AddServiceForm = ({ initialValues, onClose }: any) => {
  const form = useServiceForm(initialValues);

  const { data: branch } = useGetOwnBranch();
  const branchData = branch?.data;

  const { onSubmit, loading } = useServiceFormHandler(onClose);

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
          <FloatingLabelFormInput form={form} name="name" label="Service" />
          <FloatingLabelFormInput form={form} name="type" label="Type" />
          <FloatingLabelFormInput
            type="number"
            form={form}
            name="price"
            label="Price"
          />

          <FloatingLabelFormInput
            form={form}
            type="number"
            name="durationInMinutes"
            label="Duration(Mins)"
          />
          <FormTextArea form={form} name="description" label="Description" />

          <FormCheckbox name="isAvailable" label="Available" form={form} />
          {form.watch('isAvailable') && (
            <FormCheckbox
              name="isOnlineAvailable"
              label="Online Available"
              form={form}
            />
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <CustomButton
            type="submit"
            size="sm"
            disabled={!form.formState.isValid || loading}
          >
            Save
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

export default AddServiceForm;
