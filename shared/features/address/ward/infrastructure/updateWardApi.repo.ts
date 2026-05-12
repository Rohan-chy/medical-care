import client from '@/core/network/httpClient';
import { updateWardDto } from '../domain/ward.dto';

export const updateWard = async (data: updateWardDto) => {
  return await client({
    url: `v1/patient/ward/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
