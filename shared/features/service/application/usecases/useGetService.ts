'use client';
import { useQuery } from '@tanstack/react-query';
import { getServiceApi } from '../../infrastructure/getServiceApi.repo';
import { mapDtoToTable } from '../mapper/mapDtoToTable';

const getService = async () => {
  const data = await getServiceApi();
  return data.map(mapDtoToTable);
};

export const useGetService = () => {
  return useQuery({
    queryKey: ['get-Service'],
    queryFn: getService,
  });
};
