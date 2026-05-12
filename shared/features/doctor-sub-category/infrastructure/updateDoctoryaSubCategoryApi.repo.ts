import client from '@/core/network/httpClient';
import { UpdateDoctorSubCategoryDto } from '../domain/doctorSubCategory.dto';

export const updateDoctorSubCategory = async (
  data: UpdateDoctorSubCategoryDto
) => {
  return await client({
    url: `v1/patient/doctorSubCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
