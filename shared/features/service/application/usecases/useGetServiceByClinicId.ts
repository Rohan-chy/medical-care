'use client';
import { useQuery } from '@tanstack/react-query';
import { getServiceBybranchId } from '../../infrastructure/getServiceByClinicIdApi.repo';

export const useGetServiceByClinicId = (id: string) => {
  return useQuery({
    queryKey: ['get-ServiceByClinicId', id],
    queryFn: () => getServiceBybranchId(id),
    enabled: !!id,
  });
};
