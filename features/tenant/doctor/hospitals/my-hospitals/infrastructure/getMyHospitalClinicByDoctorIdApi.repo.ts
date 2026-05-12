import client from '@/core/network/httpClient';
import { ClinicAndBranchResponse } from '../domain/doctorHospitalResponse';

export const getMyHospitalClinicByDoctorId = async (doctorId: string) => {
  const response = await client({
    url: `v1/patient/doctorClinicAllocation/doctorId?doctorId=${doctorId}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as ClinicAndBranchResponse;
};
