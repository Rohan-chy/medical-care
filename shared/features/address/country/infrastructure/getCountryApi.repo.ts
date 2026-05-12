import client from '@/core/network/httpClient';
import { CountryResponseDTO } from '../domain/country.dto';

export const getCountry = async (): Promise<CountryResponseDTO> => {
  return await client({
    url: 'v1/patient/country',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
