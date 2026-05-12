import client from '@/core/network/httpClient';
import { createDistrictDto } from '../domain/district.dto';

export const createDistrict = async (data: createDistrictDto) => {
  return await client({
    url: 'v1/patient/district',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
