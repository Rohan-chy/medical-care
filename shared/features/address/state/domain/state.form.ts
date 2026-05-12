import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StateFormValues, stateSchema } from './state.schema';
import { mapStateDtoToForm } from '../application/mapper/mapDtoToForm';
import { TableRowStateDto } from './state.dto';

interface props {
  initialValues?: TableRowStateDto;
}

export const usestateForm = ({ initialValues }: props) => {
  const form = useForm<StateFormValues>({
    resolver: zodResolver(stateSchema),
    defaultValues: {
      countryId: '',
      name: '',
      sortingId: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapStateDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
