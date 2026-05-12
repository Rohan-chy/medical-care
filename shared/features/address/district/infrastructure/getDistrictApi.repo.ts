import client from '@/core/network/httpClient';
import { DistrictResponseDTO } from '../domain/district.dto';

export const getDistrict = async (): Promise<DistrictResponseDTO> => {
  return await client({
    url: 'v1/patient/district',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
