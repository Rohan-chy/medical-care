import client from '@/core/network/httpClient';
import { HospitalScheduleResponse } from '../domain/HospitalScheduleResponse.schema';

export const getMyHospitalSchedules = async (id: string) => {
  const response = await client({
    url: `v1/patient/appointmentbooks/doctorclinic/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as HospitalScheduleResponse;
};
