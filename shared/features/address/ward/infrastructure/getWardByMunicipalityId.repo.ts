import client from '@/core/network/httpClient';
import { WardResponseDto } from '../domain/ward.dto';

export const getWardByMunicipalityId = async (
  id: string
): Promise<WardResponseDto> => {
  return await client({
    url: `v1/patient/ward/municipalityId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
