import { useForm } from 'react-hook-form';
import { MunicipalFormValues, MunicipalSchema } from './municipal.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { TableRowMunicipalDto } from './municipal.dto';
import { mapMunicipalDtoToForm } from '../application/mapper/mapDtoToForm';

export const useMunicipalForm = (initialValues?: TableRowMunicipalDto) => {
  const form = useForm<MunicipalFormValues>({
    resolver: zodResolver(MunicipalSchema),
    defaultValues: {
      districtId: '',
      name: '',
      type: '',
      sortingId: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapMunicipalDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
