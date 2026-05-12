import { TableRowProductCategoryDto } from '../../domain/productCategory.dto';
import { ProductCategoryFormValues } from '../../domain/schema/productCategory.schema';

export const mapProductCategoryDtoToForm = (
  data: TableRowProductCategoryDto
): ProductCategoryFormValues => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    categoryId: data.categoryId,
    isActive: data.isActive,
  };
};
