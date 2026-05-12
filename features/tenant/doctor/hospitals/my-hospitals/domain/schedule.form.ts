import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { DoctorHospitalRequestResponse } from './doctorHospitalResponse';
import { useEffect } from 'react';
import { useGetDoctorProfile } from '../../../profile/application/usecases/useGetDoctorProfile';
import { AddScheduleFormValues, addScheduleSchema } from './schedule.schema';

export const useAddScheduleForm = (
  hospital?: DoctorHospitalRequestResponse
) => {
  const { data: profile }: Record<string, any> = useGetDoctorProfile();

  const form = useForm<AddScheduleFormValues>({
    resolver: zodResolver(addScheduleSchema),
    defaultValues: {
      doctorId: '',
      clinicId: '',
      branchId: '',
      scheduleDate: '',
      scheduleTimeFrom: '',
      scheduleTimeTo: '',
      maxPatientCap: 1,
      quotedFee: 0,
      isApproved: false,
    },
    mode: 'onSubmit', // or 'onChange'
  });

  useEffect(() => {
    if (hospital?.id) {
      form.setValue('doctorId', profile?.id);
      form.setValue('clinicId', hospital.id);
      form.setValue('branchId', hospital.branchId);
    }
  }, [hospital, form]);

  return form;
};

export interface CreateClinicAllocationFormProps {
  initialValues?: AddScheduleFormValues;
  onClose?: () => void;
}
