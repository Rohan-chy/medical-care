'use client';
import { useQuery } from '@tanstack/react-query';
import { getCountry } from '../../infrastructure/getCountryApi.repo';
import { CountryResponseDTO } from '../../domain/country.dto';

export const useGetCountry = () => {
  return useQuery<CountryResponseDTO>({
    queryKey: ['get-country'],
    queryFn: () => getCountry(),
  });
};
