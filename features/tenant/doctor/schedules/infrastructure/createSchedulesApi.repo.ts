import client from '@/core/network/httpClient';
import { CreateDoctorScheduleDto } from '../domain/doctorSchedule.dto';

export const createDoctorSchedule = async (data: CreateDoctorScheduleDto) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation/own',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
