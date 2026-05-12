'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorHospitalRequestListResponse } from '../../domain/doctorHospitalResponse';
import { getApprovedRequest } from '../../infrastructure/getApprovedRequestApi.repo';

export const useGetApprovedRequest = () => {
  return useQuery<DoctorHospitalRequestListResponse>({
    queryKey: ['get-approvedrequest'],
    queryFn: () => getApprovedRequest(),
  });
};
