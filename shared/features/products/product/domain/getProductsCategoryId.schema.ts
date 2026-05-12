export type ProductDetailsByCategory = {
  id: string;
  name: string;
  sku: string;
  upc: string;
  ean: string;

  category: string;
  subCategory: string;
  productCategoryId: string;

  brand: string;
  manufacturer: string;
  model: string;
  variant: string;
  version: string;

  shortDescription: string;
  longDescription: string;

  basePrice: number;
  discount: number;
  bulkPrice: number;
  tax: number;
  currency: string;

  minimumOrderQuantity: number;
  maximumOrderQuantity: number;
  leadTimeInDays: number;

  dimensionLWH: string;
  netWeight: number;
  grossWeight: number;

  hsCode: string;
  returnOrWarrantyPolicy: string;

  targetAudience: string;
  usecase: string;
  contractTerms: string;
  sustainabilityInfo: string;

  baseUrl: string;
  imageUrl: string;
};

export type ProductsByCategoryIdResponse = {
  data: ProductDetailsByCategory[];
};
