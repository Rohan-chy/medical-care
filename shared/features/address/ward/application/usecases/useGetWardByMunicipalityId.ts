'use client';
import { useQuery } from '@tanstack/react-query';
import { WardResponseDto } from '../../domain/ward.dto';
import { getWardByMunicipalityId } from '../../infrastructure/getWardByMunicipalityId.repo';

export const useGetWardByMunicipalityId = (municipalityId: string) => {
  return useQuery<WardResponseDto>({
    queryKey: ['get-Ward-by-municipalityId', municipalityId],
    queryFn: () => getWardByMunicipalityId(municipalityId),
    enabled: !!municipalityId,
  });
};
