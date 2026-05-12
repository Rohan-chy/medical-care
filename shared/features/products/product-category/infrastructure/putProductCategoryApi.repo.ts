import client from '@/core/network/httpClient';
import { updateProductCategoryDto } from '../domain/productCategory.dto';

export const putProductCategory = async (data: updateProductCategoryDto) => {
  return await client({
    url: `v1/patient/ProductCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
