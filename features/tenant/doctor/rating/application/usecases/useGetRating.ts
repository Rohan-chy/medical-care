'use client';
import { useQuery } from '@tanstack/react-query';
import { GetReviewResponseDto } from '../../domain/rating.dto';
import { getRating } from '../../infrastructure/getRatingApi.repo';

export const useGetRating = () => {
  return useQuery<GetReviewResponseDto>({
    queryKey: ['get-DoctorRating'],
    queryFn: () => getRating(),
  });
};
