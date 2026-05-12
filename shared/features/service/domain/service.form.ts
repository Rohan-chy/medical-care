import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { baseServiceSchema, ServiceFormValues } from './service.schema';
import { mapDtoToForm } from '../application/mapper/mapDtoToForm';
import { TableRowServiceDto } from './service.dto';

export const useServiceForm = (initialValues?: TableRowServiceDto) => {
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(baseServiceSchema),
    defaultValues: {
      id: '',
      name: '',
      price: 0,
      type: '',
      branchId: '',
      description: '',
      durationInMinutes: 0,
      isAvailable: true,
      isOnlineAvailable: false,
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
