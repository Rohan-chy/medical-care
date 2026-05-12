import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AddDoctorFormValues,
  createAddDoctorSchema,
} from '../addDoctor.schema';

export const useAddDoctorForm = () => {
  const form = useForm<AddDoctorFormValues>({
    resolver: zodResolver(createAddDoctorSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 0,
      countryCode: '+977',
      contactNumber: '',
      email: '',
      userName: '',
      password: '',
    },
  });

  return form;
};
