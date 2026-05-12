import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  baseOrganizationProfileSchema,
  OrganizationProfileFormValues,
} from './schema/organizationProfile.schema';
import { mapDtoToForm } from '../application/mapper/mapDtoToForm';

export const useOrganizationProfileForm = (initial?: any) => {
  const form = useForm<OrganizationProfileFormValues>({
    resolver: zodResolver(baseOrganizationProfileSchema),
    mode: 'onChange',
    defaultValues: {
      id: '',
      name: '',
      location: '',
      type: '',
      pan: '',
      contactNo: '',
      manager: '',
      registrationNumber: '',
      registrationDate: '',
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    if (initial) {
      form.reset(mapDtoToForm(initial));
    }
  }, [initial, form]);

  return form;
};
