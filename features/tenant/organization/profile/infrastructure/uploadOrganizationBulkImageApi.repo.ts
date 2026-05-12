import client from '@/core/network/httpClient';
import { uploadOrganizationBulkImageFormValues } from '../domain/schema/uploadOrganizationBulkImages.schema';

export const uploadOrganizationBulkImage = async (
  data: uploadOrganizationBulkImageFormValues
) => {
  const formData = new FormData();

  formData.append('clinicId', data.clinicId);

  if (data.image && data.image.length > 0) {
    data.image.forEach((file) => {
      formData.append('images', file); // append each file under the same "image" key
    });
  }

  return await client({
    url: 'v1/patient/clinic/clinic',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
