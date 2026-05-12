import client from '@/core/network/httpClient';
import { TenantRequestResponse } from '../domain/getTenantRequest.schema';

export const getApprovedTenant = async (): Promise<TenantRequestResponse> => {
  return await client({
    url: 'v1/patient/tenantRequest/approved',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
