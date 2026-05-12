import client from '@/core/network/httpClient';
import { DistrictResponseDTO } from '../domain/district.dto';

export const getDistrictByStateId = async (
  id: string
): Promise<DistrictResponseDTO> => {
  return client({
    url: `v1/patient/district/stateId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
