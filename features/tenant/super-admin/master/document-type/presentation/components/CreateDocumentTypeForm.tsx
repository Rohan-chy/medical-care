//rohan
import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useDocumentTypeForm } from '../../domain/useDocumentTypeForm';
import { Combobox } from '@/components/custom-components/combobox';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { documentTypeItems } from '../../application/utils/documentTypeItems';
import { useDocumentTypeFormHandler } from '../hooks/useDocumentTypeFormHandler';

const CreateDocumentTypeForm = ({ initialValues, onClose }: any) => {
  const form = useDocumentTypeForm(initialValues);

  const { onSubmit, loading } = useDocumentTypeFormHandler({ onClose });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Combobox
                items={documentTypeItems || []}
                form={form}
                name="documentType"
                label="Document Type"
              />
              <FloatingLabelFormInput form={form} name="name" label="Name" />
              <FormCheckbox form={form} name="isActive" label="Active" />
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

export default CreateDocumentTypeForm;
