'use client';
import { useQuery } from '@tanstack/react-query';
import { getSalutation } from '../../infrastructure/getSalutationApi.repo';
import { SalutationResponseDto } from '../../domain/salutation.dto';

export const useGetSalutation = () => {
  return useQuery<SalutationResponseDto>({
    queryKey: ['get-salutation'],
    queryFn: () => getSalutation(),
  });
};
