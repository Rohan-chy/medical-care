import { useMemo } from 'react';
import { useUser } from '@/utils/user/useGetUser';

export const useTenant = () => {
  const { data: user } = useUser();

  const orgKey = useMemo(() => {
    if (!user) return null;

    return user.email; // fallback (you currently have email in token)
  }, [user]);

  return { orgKey };
};
