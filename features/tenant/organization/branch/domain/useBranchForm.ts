import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { BranchFormValues, baseBranchSchema } from './branch.schema';
import { mapDtoToForm } from '../application/mapper/mapDtoToForm';
import { BranchItemDto, TableRowModel } from './branch.dto';

export const useBranchForm = (initial?: TableRowModel) => {
  const form = useForm<BranchFormValues>({
    resolver: zodResolver(baseBranchSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      location: '',
      contactNo: '',
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    if (initial) {
      form.reset(mapDtoToForm(initial));
    }
  }, [initial]);

  return form;
};
