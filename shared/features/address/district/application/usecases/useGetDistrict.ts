'use client';
import { useQuery } from '@tanstack/react-query';
import { getDistrict } from '../../infrastructure/getDistrictApi.repo';
import { DistrictResponseDTO } from '../../domain/district.dto';

export const useGetDistrict = () => {
  return useQuery<DistrictResponseDTO>({
    queryKey: ['get-District'],
    queryFn: () => getDistrict(),
  });
};
