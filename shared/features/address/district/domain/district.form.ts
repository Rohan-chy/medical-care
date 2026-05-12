import { useForm } from 'react-hook-form';
import { DistrictFormValues, DistrictSchema } from './district.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { TableRowDistrictDto } from './district.dto';
import { mapDistrictDtoToForm } from '../application/mapper/mapDtoToForm';

export const useDistrictForm = (initialValues?: TableRowDistrictDto) => {
  const form = useForm<DistrictFormValues>({
    resolver: zodResolver(DistrictSchema),
    defaultValues: {
      stateId: '',
      name: '',
      sortingId: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapDistrictDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
