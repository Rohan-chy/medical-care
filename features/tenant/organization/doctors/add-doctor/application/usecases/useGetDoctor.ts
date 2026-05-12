'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctor } from '../../infrastructure/getDoctorApi.repo';

export const useGetDoctor = () => {
  return useQuery({
    queryKey: ['get-Doctor'],
    queryFn: () => getDoctor(),
  });
};
