import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { clinicSchema } from '../schemas/createClinic.schema';
import { useEffect } from 'react';
import { ClinicResponse } from '../schemas/getClinic.schema';
import { mapDtoToForm } from '../../application/mapper/mapDtoToForm';

export type CreateClinicFormValues = z.infer<typeof clinicSchema>;

export const useCreateClinicForm = (initialValues?: ClinicResponse) => {
  const form = useForm<CreateClinicFormValues>({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      name: '',
      location: '',
      type: '',
      pan: '',
      contactNo: '',
      manager: '',
      registrationNumber: '',
      registrationDate: new Date().toISOString().split('T')[0],
      latitude: 0,
      longitude: 0,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
