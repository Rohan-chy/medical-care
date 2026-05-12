'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategoryId } from '../../infrastructure/getProductsByCategoryId.Api.repo';
import { ProductsByCategoryIdResponse } from '../../domain/getProductsCategoryId.schema';

export const useGetProductsByCategoryId = (categoryId: string) => {
  return useQuery<ProductsByCategoryIdResponse>({
    queryKey: ['get-product-byCategoryId', categoryId],
    queryFn: () => getProductsByCategoryId(categoryId),
    enabled: !!categoryId,
  });
};
