import client from '@/core/network/httpClient';
import { UpdateStateDto } from '../domain/state.dto';

export const updateState = async (data: UpdateStateDto) => {
  return await client({
    url: `v1/patient/state/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
