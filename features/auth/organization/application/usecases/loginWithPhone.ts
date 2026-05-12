import { useMutation } from '@tanstack/react-query';
import { PhoneLoginFormValues } from '../../domain/login.schema';
import { toast } from 'sonner';
import { loginWithPhoneOrganization } from '../../infrastructure/loginWithPhoneApi.repo';

export const useLoginWithPhone = (tenant: string) => {
  return useMutation({
    mutationFn: (data: PhoneLoginFormValues) =>
      loginWithPhoneOrganization(data, tenant),

    onSuccess: (response: any) => {
      const token = response?.token;
      if (token) {
        sessionStorage.setItem('token', token);
      }
      toast.success('Logged in Successfully');
    },
  });
};
