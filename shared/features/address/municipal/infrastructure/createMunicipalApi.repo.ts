import client from '@/core/network/httpClient';
import { createMunicipalDto } from '../domain/municipal.dto';

export const createMunicipal = async (data: createMunicipalDto) => {
  return await client({
    url: 'v1/patient/municipality',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
