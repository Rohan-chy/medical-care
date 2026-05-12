import client from '@/core/network/httpClient';
import { StateResponseDto } from '../domain/state.dto';

export const getStateByCountryId = async (
  id: string
): Promise<StateResponseDto> => {
  return client({
    url: `v1/patient/state/countryId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
