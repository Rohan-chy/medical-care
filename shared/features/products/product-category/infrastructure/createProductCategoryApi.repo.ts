import client from '@/core/network/httpClient';
import { createProductCategoryDto } from '../domain/productCategory.dto';

export const createProductCategory = async (data: createProductCategoryDto) => {
  return await client({
    url: 'v1/patient/ProductCategory',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
