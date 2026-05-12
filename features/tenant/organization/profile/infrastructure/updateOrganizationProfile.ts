import client from '@/core/network/httpClient';
import { updateOrganizationProfileDto } from '../domain/organizationProfile.dto';

export const updateOrganizationProfile = async (
  data: updateOrganizationProfileDto
) => {
  return await client({
    url: `v1/patient/clinic/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
