import client from '@/core/network/httpClient';
import { BranchDto } from '../domain/branch.dto';

export const getOwnBranch = async (): Promise<BranchDto> => {
  const response = await client({
    url: 'v1/patient/branch/own',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as BranchDto;
};
