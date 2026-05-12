import client from '@/core/network/httpClient';
import { createDocumentTypeDto } from '../domain/documentType.dto';

export const createDocumentType = async (data: createDocumentTypeDto) => {
  return await client({
    url: 'v1/patient/dynamicDocumentType',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
