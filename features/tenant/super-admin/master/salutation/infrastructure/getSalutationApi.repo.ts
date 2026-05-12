import client from '@/core/network/httpClient';
import { SalutationResponseDto } from '../domain/salutation.dto';

export const getSalutation = async (): Promise<SalutationResponseDto> => {
  return await client({
    url: 'v1/patient/salutation',
    method: 'GET',
    isProtected: false,
  });
};
