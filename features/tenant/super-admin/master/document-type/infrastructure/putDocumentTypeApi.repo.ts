import client from '@/core/network/httpClient';
import { updateDocumentTypeDto } from '../domain/documentType.dto';

export const putDocumentType = async (data: updateDocumentTypeDto) => {
  return await client({
    url: `v1/patient/dynamicDocumentType/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
