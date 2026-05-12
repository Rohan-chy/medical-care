import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  HospitalClinicFormValues,
  hospitalClinicSchema,
} from './hospitalClinic.schema';
import { mapDtoToForm } from '../application/mapper/mapDtoToForm';
import { HospitalClinicItemDto } from './hospitalClinic.dto';

export const useBranchForm = (initial?: HospitalClinicItemDto) => {
  const form = useForm<HospitalClinicFormValues>({
    resolver: zodResolver(hospitalClinicSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      location: '',
      type: '',

      pan: '',
      contactNo: '',

      manager: '',
      registrationNumber: '',
      registrationDate: '',

      longitude: 0,
      latitude: 0,

      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (initial) {
      form.reset(mapDtoToForm(initial));
    }
  }, [initial]);

  return form;
};
