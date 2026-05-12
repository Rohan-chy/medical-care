'use client';
import { useQuery } from '@tanstack/react-query';
import { getDocumentType } from '../../infrastructure/getDocumentTypeApi.repo';
import { DocumentDataDto } from '../../domain/documentType.dto';

export const useGetDocumentType = () => {
  return useQuery<DocumentDataDto>({
    queryKey: ['get-DocumentType'],
    queryFn: () => getDocumentType(),
  });
};
