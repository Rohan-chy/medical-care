'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getDoctorProfile } from '../../infrastructure/getDoctorProfile';
import { UpdateDoctorPayload } from '../../domain/schema/updateDoctor.schema';
import { useUser } from '@/utils/user/useGetUser';
import { useEffect } from 'react';

export const useGetDoctorProfile = () => {
  const { data: user, isLoading } = useUser();
  const queryClient = useQueryClient();

  const doctorKey = user?.email;

  //done for isolating doctor profile with key
  useEffect(() => {
    if (doctorKey) {
      queryClient.removeQueries({
        queryKey: ['get-doctor-profile'],
        exact: false,
      });
    }
  }, [doctorKey]);

  return useQuery<UpdateDoctorPayload>({
    queryKey: ['get-doctor-profile', doctorKey],
    queryFn: getDoctorProfile,
    enabled: !!doctorKey && !isLoading,
    staleTime: 0,
  });
};
