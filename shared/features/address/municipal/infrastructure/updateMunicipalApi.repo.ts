import client from '@/core/network/httpClient';
import { updateMunicipalDto } from '../domain/municipal.dto';

export const updateMunicipal = async (data: updateMunicipalDto) => {
  return await client({
    url: `v1/patient/municipality/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
