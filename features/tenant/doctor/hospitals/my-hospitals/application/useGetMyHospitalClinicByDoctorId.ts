'use client';
import { useQuery } from '@tanstack/react-query';
import { getMyHospitalClinicByDoctorId } from '../infrastructure/getMyHospitalClinicByDoctorIdApi.repo';
import { ClinicAndBranchResponse } from '../domain/doctorHospitalResponse';

export const useGetMyHospitalClinicByDoctorId = (id: string) => {
  return useQuery<ClinicAndBranchResponse>({
    queryKey: ['get-myHospitalClinicByDoctorId'],
    queryFn: () => getMyHospitalClinicByDoctorId(id),
  });
};
