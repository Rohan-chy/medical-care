import client from '@/core/network/httpClient';
import { CreateStateDto } from '../domain/state.dto';

export const createState = async (data: CreateStateDto) => {
  return await client({
    url: 'v1/patient/state',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
