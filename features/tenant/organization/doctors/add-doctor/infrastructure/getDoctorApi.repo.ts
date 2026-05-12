import client from '@/core/network/httpClient';
import { ResponseAddDoctorDto } from '../domain/addDoctor.dto';

export const getDoctor = async (): Promise<ResponseAddDoctorDto> => {
  const response = await client({
    url: 'v1/patient/clinic/owndoctors',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as ResponseAddDoctorDto;
};
