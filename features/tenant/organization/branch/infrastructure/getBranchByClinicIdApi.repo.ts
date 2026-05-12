import client from '@/core/network/httpClient';
import { BranchDto } from '../domain/branch.dto';

export const getBranchByClinicId = async (id: string): Promise<BranchDto> => {
  const response = await client({
    url: `v1/patient/branch/clinicId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as BranchDto;
};
