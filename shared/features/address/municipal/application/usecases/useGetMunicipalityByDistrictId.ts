'use client';
import { useQuery } from '@tanstack/react-query';
import { getMunicipalityByDistrictId } from '../../infrastructure/getMunicipalityByDistrictId';
import { MunicipalResponseDto } from '../../domain/municipal.dto';

export const useGetMunicipalityByDistrictId = (id: string) => {
  return useQuery<MunicipalResponseDto>({
    queryKey: ['municipalities', id],
    queryFn: () => getMunicipalityByDistrictId(id),
    enabled: !!id,
  });
};
