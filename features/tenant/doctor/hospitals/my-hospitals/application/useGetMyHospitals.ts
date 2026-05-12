'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorHospitalRequestResponse } from '../domain/doctorHospitalResponse';
import { getMyHospitals } from '../infrastructure/getMyHospitalsApi.repo';

export const useGetMyHospitals = () => {
  return useQuery<DoctorHospitalRequestResponse[]>({
    queryKey: ['get-myHospitals'],
    queryFn: () => getMyHospitals(),
  });
};
