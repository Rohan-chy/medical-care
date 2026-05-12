'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorSubCategoryResponse } from '../../domain/doctorSubCategory.dto';
import { getOwnDoctorSubcategory } from '../../infrastructure/getOwnDoctorSubCategoryApi.repo';

export const useGetOwnDoctorSubcategory = () => {
  return useQuery<DoctorSubCategoryResponse>({
    queryKey: ['get-doctor-subcategory'],
    queryFn: () => getOwnDoctorSubcategory(),
  });
};
