import client from '@/core/network/httpClient';
import { WardResponseDto } from '../domain/ward.dto';

export const getWard = async (): Promise<WardResponseDto> => {
  return await client({
    url: 'v1/patient/ward',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
