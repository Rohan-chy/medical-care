import client from '@/core/network/httpClient';
import { uploadProductCategoryImageDto } from '../domain/productCategory.dto';

export const uploadProductCategoryImage = async (
  data: uploadProductCategoryImageDto
) => {
  const formData = new FormData();

  formData.append('productCategoryId', data.productCategoryId);

  // Append file properly
  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1/patient/productCategory/productCategory',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true, // VERY IMPORTANT
    isProtected: true,
    tokenSource: 'session',
  });
};
