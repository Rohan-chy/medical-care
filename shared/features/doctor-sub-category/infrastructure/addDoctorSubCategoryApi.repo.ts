import client from '@/core/network/httpClient';
import { CreateDoctorSubCategoryDto } from '../domain/doctorSubCategory.dto';

export const addDoctorSubCategory = async (
  data: CreateDoctorSubCategoryDto
) => {
  return await client({
    url: `v1/patient/doctorSubCategory`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
