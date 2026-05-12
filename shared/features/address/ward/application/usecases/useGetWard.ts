'use client';
import { useQuery } from '@tanstack/react-query';
import { getWard } from '../../infrastructure/getWardApi.repo';
import { WardResponseDto } from '../../domain/ward.dto';

export const useGetWard = () => {
  return useQuery<WardResponseDto>({
    queryKey: ['get-Ward'],
    queryFn: () => getWard(),
  });
};
