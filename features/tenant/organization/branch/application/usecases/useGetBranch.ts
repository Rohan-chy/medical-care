'use client';
import { useQuery } from '@tanstack/react-query';
import { getBranch } from '../../infrastructure/getBranchApi.repo';

export const useGetBranch = () => {
  return useQuery({
    queryKey: ['get-branch'],
    queryFn: () => getBranch(),
  });
};
