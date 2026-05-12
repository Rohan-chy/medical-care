'use client';
import { useQuery } from '@tanstack/react-query';
import { getProfileOrganization } from '../../infrastructure/getProfileOrganization';
import { organizationProfileResponseDto } from '../../domain/organizationProfile.dto';
import { useTenant } from '@/utils/user/useTenant';

export const useGetProfileOrganization = () => {
  const { orgKey } = useTenant();

  return useQuery<organizationProfileResponseDto>({
    queryKey: ['get-profile-organization'],
    queryFn: getProfileOrganization,
    // enabled: !!orgKey,
  });
};
