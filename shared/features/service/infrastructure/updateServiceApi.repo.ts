import client from '@/core/network/httpClient';
import { UpdateServiceDto } from '../domain/service.dto';

export const updateService = async (data: UpdateServiceDto) => {
  return await client({
    url: `v1/patient/branchService/${data.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
