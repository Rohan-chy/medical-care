'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductCategory } from '../../infrastructure/getProductCategoryApi.repo';
import { ProductCategoryResponseDto } from '../../domain/productCategory.dto';

export const useGetProductCategory = () => {
  return useQuery<ProductCategoryResponseDto>({
    queryKey: ['get-ProductCategory'],
    queryFn: () => getProductCategory(),
  });
};
