import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTenant } from '../../infrastructure/requestTenantApi.repository';
import { OrganizationRegistrationFormValues } from '../../domain/tenantRequest.schema';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useRequestTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OrganizationRegistrationFormValues) =>
      createTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-pending-requests'] });
      toast.success('Approved successfully.');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
