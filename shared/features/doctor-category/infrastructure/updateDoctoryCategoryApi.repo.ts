import client from '@/core/network/httpClient';
import { UpdateDoctorCategory } from '../domain/doctorCategory.dto';

export const updateDoctorCategory = async (data: UpdateDoctorCategory) => {
  return await client({
    url: `v1/patient/doctorCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
