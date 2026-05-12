'use client';
import { useQuery } from '@tanstack/react-query';
import { getOwnBranch } from '../../infrastructure/getOwnBranchApi.repo';

export const useGetOwnBranch = () => {
  return useQuery({
    queryKey: ['get-ownbranch'],
    queryFn: () => getOwnBranch(),
  });
};
