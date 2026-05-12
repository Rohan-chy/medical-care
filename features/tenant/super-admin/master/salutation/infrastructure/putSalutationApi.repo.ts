import client from '@/core/network/httpClient';
import { updateSalutationDto } from '../domain/salutation.dto';

export const putSalutation = async (data: updateSalutationDto) => {
  return await client({
    url: `v1/patient/salutation/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
