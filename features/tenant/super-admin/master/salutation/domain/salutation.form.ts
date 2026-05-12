import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SalutationFormValues, salutationSchema } from './salutation.schema';
import { useEffect } from 'react';
import { mapSalutationDtoToForm } from '../application/mapper/mapDtoToForm';
import { TableRowSalutationDto } from './salutation.dto';

export const useSalutationForm = (initialValues: TableRowSalutationDto) => {
  const form = useForm<SalutationFormValues>({
    resolver: zodResolver(salutationSchema),
    defaultValues: {
      name: '',
      description: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapSalutationDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
