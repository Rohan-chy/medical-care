import { useQuery } from '@tanstack/react-query';
import { TenantRequestResponse } from '../../domain/getTenantRequest.schema';
import { getApprovedTenant } from '../../infrastructure/getApprovedTenantApi.repo';

export const useGetApprovedTenant = () => {
  return useQuery<TenantRequestResponse>({
    queryKey: ['get-approved-requests'],
    queryFn: () => getApprovedTenant(),
  });
};
