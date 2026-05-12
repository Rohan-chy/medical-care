import client from '@/core/network/httpClient';
import { BranchTimingFormValues } from '../domain/branchTiming.schema';

export const updateBranchTiming = async (data: BranchTimingFormValues) => {
  return await client({
    url: `v1/patient/branchTiming`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
