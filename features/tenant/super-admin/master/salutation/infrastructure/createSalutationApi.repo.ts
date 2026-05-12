import client from '@/core/network/httpClient';
import { createSalutationDto } from '../domain/salutation.dto';

export const createSalutation = async (data: createSalutationDto) => {
  return await client({
    url: 'v1/patient/salutation',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
