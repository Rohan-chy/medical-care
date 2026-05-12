import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { WardFormValues, WardSchema } from './ward.schema';
import { mapWardDtoToForm } from '../application/mapper/mapDtoToForm';
import { TableRowWardDto } from './ward.dto';

export const useWardForm = (initialValues?: TableRowWardDto) => {
  const form = useForm<WardFormValues>({
    resolver: zodResolver(WardSchema),
    defaultValues: {
      municipalityId: '',
      wardNumber: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapWardDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
