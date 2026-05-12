import client from '@/core/network/httpClient';
import { ResponseServiceDto } from '../domain/service.dto';

export const getServiceBybranchId = async (
  id: string
): Promise<ResponseServiceDto> => {
  const response = await client({
    url: `v1/patient/branchService/branchId?id=${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as ResponseServiceDto;
};
