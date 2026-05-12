import client from '@/core/network/httpClient';
import { DoctorProfileVerificationFormValues } from '@/features/tenant/super-admin/doctor/doctor-verification/domain/requestVerification.schema';
// import { DoctorVerificationFormValues } from '../domain/schema/doctorVerification.schema';

export const verifyDoctor = async (
  data: DoctorProfileVerificationFormValues
) => {
  return await client({
    url: 'v1/patient/doctorVerification',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
