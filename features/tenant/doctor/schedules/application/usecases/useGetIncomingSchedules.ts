'use client';
import { useQuery } from '@tanstack/react-query';
import { GetDoctorScheduleResponse } from '../../domain/doctorSchedule.dto';
import { getDoctorIncomingSchedule } from '../../infrastructure/getIncomingSchedulesApi.repo';

export const useGetDoctorIncomingSchedule = () => {
  return useQuery<GetDoctorScheduleResponse>({
    queryKey: ['get-DoctorIncomingSchedule'],
    queryFn: () => getDoctorIncomingSchedule(),
  });
};
