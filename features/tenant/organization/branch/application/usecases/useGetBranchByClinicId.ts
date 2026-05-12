'use client';
import { useQuery } from '@tanstack/react-query';
import { getBranchByClinicId } from '../../infrastructure/getBranchByClinicIdApi.repo';

export const useGetBranchByClinicId = (id: string) => {
  return useQuery({
    queryKey: ['get-branch', id],
    queryFn: () => getBranchByClinicId(id),
    enabled: !!id,
  });
};
