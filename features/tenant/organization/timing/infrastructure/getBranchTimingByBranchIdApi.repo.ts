import client from '@/core/network/httpClient';
import { BranchTimingFormValues } from '../domain/branchTiming.schema';

export const getBranchTiming = async (
  id: string
): Promise<BranchTimingFormValues> => {
  const response = await client({
    url: `v1/patient/branchTiming/branchId?id=${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as BranchTimingFormValues;
};
