import client from '@/core/network/httpClient';
import { BranchDto } from '../domain/branch.dto';

export const getBranchByBranchId = async (id: string): Promise<BranchDto> => {
  const response = await client({
    url: `v1/patient/branch/branchId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as BranchDto;
};
