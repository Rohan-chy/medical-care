import client from '@/core/network/httpClient';
import { MunicipalResponseDto } from '../domain/municipal.dto';

export const getMunicipalityByDistrictId = async (
  id: string
): Promise<MunicipalResponseDto> => {
  return client({
    url: `v1/patient/municipality/districtId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
