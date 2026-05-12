'use client';
import { useQuery } from '@tanstack/react-query';
import { getMunicipal } from '../../infrastructure/getMunicipalApi.repo';
import { MunicipalResponseDto } from '../../domain/municipal.dto';

export const useGetMunicipal = () => {
  return useQuery<MunicipalResponseDto>({
    queryKey: ['get-Municipal'],
    queryFn: () => getMunicipal(),
  });
};
