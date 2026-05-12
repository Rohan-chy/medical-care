import client from '@/core/network/httpClient';
import { UpdateDoctorScheduleDto } from '../domain/doctorSchedule.dto';

export const updateDoctorSchedule = async (data: UpdateDoctorScheduleDto) => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
