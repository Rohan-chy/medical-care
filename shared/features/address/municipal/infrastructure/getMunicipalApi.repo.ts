import client from '@/core/network/httpClient';
import { MunicipalResponseDto } from '../domain/municipal.dto';

export const getMunicipal = async (): Promise<MunicipalResponseDto> => {
  return await client({
    url: 'v1/patient/municipality',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
