import client from '@/core/network/httpClient';
import { DoctorHospitalRequestListResponse } from '../domain/doctorHospitalResponse';

export const getApprovedRequest = async () => {
  const response = await client({
    url: `v1/patient/doctorClinicRequest`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as DoctorHospitalRequestListResponse;
};
