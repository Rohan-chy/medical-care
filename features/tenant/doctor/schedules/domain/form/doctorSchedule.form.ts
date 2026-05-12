import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  DoctorScheduleFormData,
  DoctorScheduleSchema,
} from '../schema/doctorSchedule.schema';
import { DoctorScheduleResponseItemDto } from '../doctorSchedule.dto';
import { mapScheduleToForm } from '../../application/mapper/mapDtoToForm';

export const useDoctorScheduleForm = (
  initialValues?: DoctorScheduleResponseItemDto
) => {
  const form = useForm<DoctorScheduleFormData>({
    resolver: zodResolver(DoctorScheduleSchema),
    defaultValues: {
      clinicId: '',
      branchId: '',
      scheduleDate: new Date().toISOString().split('T')[0],
      scheduleTimeFrom: '',
      scheduleTimeTo: '',
      maxPatientCap: 0,
      quotedFee: 0,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapScheduleToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
