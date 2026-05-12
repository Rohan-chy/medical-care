import client from '@/core/network/httpClient';
import { BranchTimingFormValues } from '../domain/branchTiming.schema';

export const addBranchTiming = async (data: BranchTimingFormValues) => {
  return await client({
    url: 'v1/patient/branchTiming/all',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
