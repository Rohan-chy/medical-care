import client from '@/core/network/httpClient';
import { GetDoctorsOfClincResponse } from '../domain/doctorsOfClinicReponse';

export const getDoctorsOfClinicByClinicIdAndBranchId = async (
  clinicId: string,
  branchId: string
): Promise<GetDoctorsOfClincResponse> => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/clinicidAndBranchId?clinicId=${clinicId}&branchId=${branchId}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
