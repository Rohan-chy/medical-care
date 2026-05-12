'use client';
import { useQuery } from '@tanstack/react-query';
import { GetDoctorScheduleResponse } from '../../domain/doctorSchedule.dto';
import { getDoctorOutgoingSchedule } from '../../infrastructure/getOutgoingSchedulesApi.repo';

export const useGetDoctorOutgoingSchedule = () => {
  return useQuery<GetDoctorScheduleResponse>({
    queryKey: ['get-DoctorOutgoingSchedule'],
    queryFn: () => getDoctorOutgoingSchedule(),
  });
};
