import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  ProductCategoryFormValues,
  ProductCategorySchema,
} from '../schema/productCategory.schema';
import { mapProductCategoryDtoToForm } from '../../application/mapper/mapDtoToForm';
import { TableRowProductCategoryDto } from '../productCategory.dto';

interface props {
  initialValues?: TableRowProductCategoryDto;
}

export const useCreateProductCategoryForm = ({ initialValues }: props) => {
  const form = useForm<ProductCategoryFormValues>({
    resolver: zodResolver(ProductCategorySchema),
    defaultValues: {
      id: '',
      name: '',
      categoryId: null,
      description: '',
      isActive: false,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapProductCategoryDtoToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
