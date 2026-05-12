import client from '@/core/network/httpClient';
import { CreateDoctorCategory } from '../domain/doctorCategory.dto';

export const addDoctorCategory = async (data: CreateDoctorCategory) => {
  return await client({
    url: `v1/patient/doctorCategory`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
