'use client';

import { useQuery } from '@tanstack/react-query';
import { CategoryResponse } from '../../domain/doctorCategory.dto';
import { getOwnDoctorCategory } from '../../infrastructure/getOwnDoctorCategoryApi.repo';

export const useGetOwnDoctorCategory = () => {
  return useQuery<CategoryResponse>({
    queryKey: ['get-doctor-category'],
    queryFn: getOwnDoctorCategory,
  });
};
