import client from '@/core/network/httpClient';
import { RegisterAdditionalInfoPayload } from '../domain/registerDoctorAdditionalInfo.schema';
import { RegisterAdditionalInfoResponse } from '../application/usecases/useRegisterDoctorAdditionalInfo';

export const registerAdditionalInfoDoctor = async (
  data: RegisterAdditionalInfoPayload
): Promise<RegisterAdditionalInfoResponse> => {
  return await client({
    url: 'v1/patient/doctor',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'local',
  });
};
