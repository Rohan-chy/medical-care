import client from '@/core/network/httpClient';
import { GetDoctorScheduleResponse } from '../domain/doctorSchedule.dto';

export const getDoctorOutgoingSchedule =
  async (): Promise<GetDoctorScheduleResponse> => {
    return await client({
      url: `v1/patient/doctorClinicAllocation/sent`,
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
