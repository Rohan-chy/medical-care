import { useUser } from '@/utils/user/useGetUser';
import { useMemo } from 'react';

export const useTenant = () => {
  const { data: user } = useUser();

  const orgKey = useMemo(() => {
    if (!user) return null;

    return user.email;
  }, [user]);

  return { orgKey };
};
