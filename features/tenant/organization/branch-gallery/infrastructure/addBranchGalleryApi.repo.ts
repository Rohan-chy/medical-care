import client from '@/core/network/httpClient';
import { branchGalleryDto } from '../domain/branchGallery.dto';

export const addBranchGallery = async (data: branchGalleryDto) => {
  const formData = new FormData();

  formData.append('branchId', data.branchId);

  if (data.image && data.image.length > 0) {
    data.image.forEach((file) => {
      formData.append('images', file); // append each file under the same "image" key
    });
  }

  return await client({
    url: 'v1/patient/branch/branch',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
