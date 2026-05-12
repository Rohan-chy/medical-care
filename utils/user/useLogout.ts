import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = (redirectPath: string) => {
    localStorage.clear();
    sessionStorage.clear();
    queryClient.clear();

    router.push(redirectPath);
  };

  return {
    logout,
  };
};
