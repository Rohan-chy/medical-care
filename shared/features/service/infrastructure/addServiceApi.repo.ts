import client from '@/core/network/httpClient';
import { CreateServiceDto } from '../domain/service.dto';

export const addService = async (data: CreateServiceDto) => {
  return await client({
    url: 'v1/patient/branchService/branchService',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
