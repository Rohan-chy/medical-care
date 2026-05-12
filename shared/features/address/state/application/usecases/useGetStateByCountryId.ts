'use client';
import { useQuery } from '@tanstack/react-query';
import { getStateByCountryId } from '../../infrastructure/getStateByCountryId';
import { StateResponseDto } from '../../domain/state.dto';

export const useGetStateByCountryId = (id: string) => {
  return useQuery<StateResponseDto>({
    queryKey: ['states', id],
    queryFn: () => getStateByCountryId(id),
    enabled: !!id,
  });
};
