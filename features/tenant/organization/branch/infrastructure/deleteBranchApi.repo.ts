import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteBranch = async (data: deleteData) => {
  return await client({
    url: `v1/patient/branch/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
