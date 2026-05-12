import client from '@/core/network/httpClient';
import { ProductCategoryResponseDto } from '../domain/productCategory.dto';

export const getProductCategory =
  async (): Promise<ProductCategoryResponseDto> => {
    return await client({
      url: 'v1/patient/ProductCategory',
      method: 'GET',
      isProtected: true,
    });
  };
