import client from '@/core/network/httpClient';
import { updateCountryDto } from '../domain/country.dto';

export const updateCountry = async (data: updateCountryDto) => {
  return await client({
    url: `v1/patient/country/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
