import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteBranchGallery = async (data: deleteData) => {
  return await client({
    url: `v1/patient/branch/image/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
