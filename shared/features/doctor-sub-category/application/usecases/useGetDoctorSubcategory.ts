'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorSubCategoryResponse } from '../../domain/doctorSubCategory.dto';
import { getDoctorSubcategory } from '../../infrastructure/getDoctorSubcategoryApi.repo';

export const useGetDoctorSubcategory = () => {
  return useQuery<DoctorSubCategoryResponse>({
    queryKey: ['get-doctor-subcategory'],
    queryFn: () => getDoctorSubcategory(),
  });
};
