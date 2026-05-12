import { useQuery } from '@tanstack/react-query';
import { TenantRequestResponse } from '../../domain/getTenantRequest.schema';
import { getPendingTenantRequest } from '../../infrastructure/getPendingTenantRequestApi.repo';

export const useGetPendingTenantRequests = () => {
  return useQuery<TenantRequestResponse>({
    queryKey: ['get-pending-requests'],
    queryFn: () => getPendingTenantRequest(),
  });
};
