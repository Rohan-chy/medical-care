import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { ResponseAddDoctorItemDto } from '../addDoctor.dto';
import {
  UpdateDoctorFormValues,
  updateDoctorSchema,
} from '../addDoctor.schema';
import { mapDtoToForm } from '../../application/mapper/mapDtoToForm';

export const useUpdateDoctorForm = (initial?: ResponseAddDoctorItemDto) => {
  const form = useForm<UpdateDoctorFormValues>({
    resolver: zodResolver(updateDoctorSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 0,
      countryCode: '+977',
      contactNumber: '',
      dateOfBirth: new Date().toISOString().split('T')[0],
      dateOfBirthNp: '',
    },
  });

  useEffect(() => {
    if (initial) {
      form.reset(mapDtoToForm(initial));
    }
  }, [initial, form]);

  return form;
};
