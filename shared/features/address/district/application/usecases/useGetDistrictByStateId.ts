'use client';
import { useQuery } from '@tanstack/react-query';
import { getDistrictByStateId } from '../../infrastructure/getDistrictByStateIdApi.repo';
import { DistrictResponseDTO } from '../../domain/district.dto';

export const useGetDistrictByStateId = (id: string) => {
  return useQuery<DistrictResponseDTO>({
    queryKey: ['districts', id],
    queryFn: () => getDistrictByStateId(id),
    enabled: !!id,
  });
};
