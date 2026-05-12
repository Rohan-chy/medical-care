import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteDoctor = async (data: deleteData) => {
  return await client({
    url: `v1/patient/doctor/${data.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
