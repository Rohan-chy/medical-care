import client from '@/core/network/httpClient';
import { DocumentDataDto } from '../domain/documentType.dto';

export const getDocumentType = async (): Promise<DocumentDataDto> => {
  return await client({
    url: 'v1/patient/dynamicDocumentType',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
