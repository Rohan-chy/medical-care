import client from '@/core/network/httpClient';
import { CategoryResponse } from '../domain/doctorCategory.dto';

export const getOwnDoctorCategory = async (): Promise<CategoryResponse> => {
  const response = await client({
    url: 'v1/patient/doctorCategory/own',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });

  return response as CategoryResponse;
};
