import client from '@/core/network/httpClient';
import { createWardDto } from '../domain/ward.dto';

export const createWard = async (data: createWardDto) => {
  return await client({
    url: 'v1/patient/ward',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
