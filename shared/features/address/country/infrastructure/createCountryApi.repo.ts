import client from '@/core/network/httpClient';
import { createCountryDto } from '../domain/country.dto';

export const createCountry = async (data: createCountryDto) => {
  return await client({
    url: 'v1/patient/country',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
