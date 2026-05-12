import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteProductDynamicAttribute = async (data: deleteData) => {
  return await client({
    url: `v1/patient/dynamicAttribute/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
