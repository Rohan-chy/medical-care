import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useSalutationForm } from '../../domain/salutation.form';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useSalutationFormHandler } from '../hooks/useSalutationFormHandler';

const CreateSalutationForm = ({ initialValues, onClose }: any) => {
  const form = useSalutationForm(initialValues);

  const { onSubmit, loading } = useSalutationFormHandler({ onClose });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <FloatingLabelFormInput
                form={form}
                name="name"
                label="Salutation"
              />

              <FormTextArea
                form={form}
                name="description"
                label="Description"
              />
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton type="submit" disabled={loading} size="sm">
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>

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
      </div>
    </div>
  );
};

export default CreateSalutationForm;
