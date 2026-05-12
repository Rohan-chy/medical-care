import {
  ProductCategoryResponseItemDto,
  TableRowProductCategoryDto,
} from '../../domain/productCategory.dto';

export const mapProductCategoryDtoToTable = (
  data: ProductCategoryResponseItemDto
): TableRowProductCategoryDto => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    categoryId: data.categoryId,
    categoryName: data.categoryName,
    isActive: data.isActive,
    baseAddress: data.baseAddress,
    imageUrl: data.imageUrl,
  };
};
