import { useCreateProductCategory } from '../../application/usecases/useCreateProductCategory';
import { usePutProductCategory } from '../../application/usecases/usePutProductCategory';
import {
  createProductSchema,
  ProductCategoryFormValues,
  updateteProductSchema,
} from '../../domain/schema/productCategory.schema';

export const useProductCategorySubmit = (onClose: any) => {
  const { mutate: createProductCategoryAttribute, isPending: createPending } =
    useCreateProductCategory();

  const { mutate: putProductCategoryAttribute, isPending: patchPending } =
    usePutProductCategory();

  const onSubmit = (values: ProductCategoryFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      const parsed = updateteProductSchema.parse(values);
      putProductCategoryAttribute(parsed, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      const parsed = createProductSchema.parse(values);
      createProductCategoryAttribute(parsed, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
