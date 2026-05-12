import client from '@/core/network/httpClient';
import { StateResponseDto } from '../domain/state.dto';

export const getState = async (): Promise<StateResponseDto> => {
  return await client({
    url: 'v1/patient/state',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
