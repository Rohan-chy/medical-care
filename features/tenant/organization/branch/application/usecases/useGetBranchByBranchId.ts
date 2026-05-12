'use client';
import { useQuery } from '@tanstack/react-query';
import { getBranchByBranchId } from '../../infrastructure/getBranchByBranchIdApi.repo';

export const useGetBranchByBranchId = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['get-branch', id],
    queryFn: () => getBranchByBranchId(id),
    enabled: !!id && !!enabled,
  });
};
