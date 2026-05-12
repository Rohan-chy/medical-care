import client from '@/core/network/httpClient';
import { updateDistrictDto } from '../domain/district.dto';

export const updateDistrict = async (data: updateDistrictDto) => {
  return await client({
    url: `v1/patient/district/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
