'use client';
import { useQuery } from '@tanstack/react-query';
import { getState } from '../../infrastructure/getStateApi.repo';
import { StateResponseDto } from '../../domain/state.dto';

export const useGetState = () => {
  return useQuery<StateResponseDto>({
    queryKey: ['get-State'],
    queryFn: () => getState(),
  });
};
