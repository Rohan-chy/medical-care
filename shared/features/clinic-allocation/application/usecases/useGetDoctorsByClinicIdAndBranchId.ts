'use client';
import { useQuery } from '@tanstack/react-query';
import { GetDoctorsOfClincResponse } from '../../domain/doctorsOfClinicReponse';
import { getDoctorsOfClinicByClinicIdAndBranchId } from '../../infrastructure/getDoctorsByClinicIdAndBranchIdApi.repo';

export const useGetDoctorsByClinicIdAndBranchId = (
  clinicId: string,
  branchId: string
) => {
  return useQuery<GetDoctorsOfClincResponse>({
    queryKey: ['get-doctorsByClinicIdAndBranchId', clinicId, branchId],
    queryFn: () => getDoctorsOfClinicByClinicIdAndBranchId(clinicId, branchId),
    enabled: !!clinicId && !!branchId,
  });
};
