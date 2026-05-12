import client from '@/core/network/httpClient';
import { TenantRequestResponse } from '../domain/getTenantRequest.schema';

export const getPendingTenantRequest =
  async (): Promise<TenantRequestResponse> => {
    return await client({
      url: 'v1/patient/tenantRequest/pending',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
