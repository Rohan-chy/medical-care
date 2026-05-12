import client from '@/core/network/httpClient';
import { ProductsByCategoryIdResponse } from '../domain/getProductsCategoryId.schema';

export const getProductsByCategoryId = async (
  id: string
): Promise<ProductsByCategoryIdResponse> => {
  return await client({
    url: `v1/patient/product/categoryId/${id}`,
    method: 'GET',
    isProtected: true,
  });
};
