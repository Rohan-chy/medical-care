import client from '@/core/network/httpClient';
import { UpdateBranchDto } from '../domain/branch.dto';

export const updateBranch = async (data: UpdateBranchDto) => {
  return await client({
    url: `v1/patient/branch/${data.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
