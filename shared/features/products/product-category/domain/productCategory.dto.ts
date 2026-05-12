export type ProductCategoryDto = {
  name: string;
  description?: string;
  categoryId: string | null;
};

//create dto
export type createProductCategoryDto = ProductCategoryDto;

//update dto
export type updateProductCategoryDto = createProductCategoryDto & {
  id: string;
  isActive?: boolean;
};

//get response dto
export type ProductCategoryResponseItemDto = ProductCategoryDto & {
  id: string;
  categoryName: string;
  isActive: boolean;
  baseAddress: string;
  imageUrl: string | null;
};

export type ProductCategoryResponseDto = {
  data: ProductCategoryResponseItemDto[];
};

//table row dto
export type TableRowProductCategoryDto = ProductCategoryDto & {
  id: string;
  categoryName: string;
  isActive: boolean;
  baseAddress: string;
  imageUrl: string | null;
};

//upload product category image dto
export type uploadProductCategoryImageDto = {
  productCategoryId: string;
  image: File;
};
