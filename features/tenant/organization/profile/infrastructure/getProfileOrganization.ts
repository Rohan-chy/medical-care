import client from '@/core/network/httpClient';
import { organizationProfileResponseDto } from '../domain/organizationProfile.dto';

export const getProfileOrganization =
  async (): Promise<organizationProfileResponseDto> => {
    return await client({
      url: `v1/patient/clinic/own`,
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
