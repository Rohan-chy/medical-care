'use client';
import { useQuery } from '@tanstack/react-query';
import { AppointmentResponse } from '../domain/appointmentBook.dto';
import { getAppointmentBook } from '../infrastructure/getAppointmentBook';

export const useGetAppointmentBook = (id: string) => {
  return useQuery<AppointmentResponse>({
    queryKey: ['clinic-appointmentBook', id],
    queryFn: () => getAppointmentBook(id),
    enabled: !!id,
  });
};
