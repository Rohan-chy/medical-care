import client from '@/core/network/httpClient';
import {
  ResponseServiceDto,
  ResponseServiceItemDto,
} from '../domain/service.dto';

export const getServiceApi = async (): Promise<ResponseServiceItemDto[]> => {
  const response = await client({
    url: 'v1/patient/branchService/own',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });

  return (response as ResponseServiceDto).data;
};
