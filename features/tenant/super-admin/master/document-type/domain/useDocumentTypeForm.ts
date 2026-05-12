import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  DocumentTypeFormValues,
  DocumentTypeSchema,
} from './documentType.schema';
import { useEffect } from 'react';
import { mapDocumentTypeToForm } from '../application/mapper/mapDtoToForm';
import { DocumentTypeResponseItemDto } from './documentType.dto';

export const useDocumentTypeForm = (
  initialValues: DocumentTypeResponseItemDto
) => {
  const form = useForm<DocumentTypeFormValues>({
    resolver: zodResolver(DocumentTypeSchema),
    defaultValues: {
      name: '',
      documentType: 0,
      isActive: true,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(mapDocumentTypeToForm(initialValues));
    }
  }, [initialValues, form]);

  return form;
};
