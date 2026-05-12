import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CountryFormValues, countrySchema } from './country.schema';
import { TableRowCountryDto } from './country.dto';
import { mapCountryDtoToForm } from '../application/mapper/mapDtoToForm';

interface props {
  initialValues?: TableRowCountryDto;
}
export const useCountryForm = ({ initialValues }: props) => {
  const form = useForm<CountryFormValues>({
    resolver: zodResolver(countrySchema),
    defaultValues: {
      name: '',
      code: '',
      dialingCode: '',
      sortingId: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapCountryDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
