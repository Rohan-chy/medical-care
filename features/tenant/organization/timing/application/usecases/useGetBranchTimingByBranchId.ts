'use client';
import { useQuery } from '@tanstack/react-query';
import { getBranchTiming } from '../../infrastructure/getBranchTimingByBranchIdApi.repo';

export const useGetBranchTimingByBranchId = (
  id: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: ['get-branchTimingByBranchId', id],
    queryFn: () => getBranchTiming(id),
    enabled: !!id && !!enabled,
  });
};
