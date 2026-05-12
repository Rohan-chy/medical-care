import client from '@/core/network/httpClient';
import { CreateBranchDto } from '../domain/branch.dto';

export const addBranch = async (data: CreateBranchDto) => {
  return await client({
    url: 'v1/patient/branch',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
