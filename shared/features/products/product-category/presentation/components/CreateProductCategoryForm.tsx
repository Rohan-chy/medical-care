import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import { convertProductCategoryToItems } from '../../application/utils/productCategoryOptions';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useProductCategorySubmit } from '../hooks/useProductCategorySubmit';
import {
  ProductCategoryResponseItemDto,
  TableRowProductCategoryDto,
} from '../../domain/productCategory.dto';
import { useCreateProductCategoryForm } from '../../domain/form/productCategory.form';
import { FormTextArea } from '@/components/extended/form-textarea';

export interface CreateProductCategoryFormProps {
  initialValues?: TableRowProductCategoryDto;
  onClose?: () => void;
  ProductCategory?: ProductCategoryResponseItemDto[];
}

const CreateProductCategoryForm = ({
  initialValues,
  onClose,
  ProductCategory,
}: CreateProductCategoryFormProps) => {
  const form = useCreateProductCategoryForm({ initialValues });

  const { onSubmit, loading } = useProductCategorySubmit(onClose);

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FloatingLabelFormInput
              form={form}
              name="name"
              label="Category"
              isRequired
            />

            <Combobox
              items={convertProductCategoryToItems(ProductCategory) || []}
              form={form}
              name="categoryId"
              label="Main Category"
            />

            <FormTextArea form={form} name="description" label="Description" />

            {initialValues?.id && (
              <FormCheckbox name="isActive" label="Active" form={form} />
            )}
            {/* ---------- ACTIONS ---------- */}
            <div className="flex justify-end gap-2">
              <CustomButton type="submit" size="sm" disabled={loading}>
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>

              <CustomButton
                type="button"
                size="sm"
                variant="outline"
                disabled={loading}
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

export default CreateProductCategoryForm;
