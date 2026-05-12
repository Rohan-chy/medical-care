import client from '@/core/network/httpClient';
import { CreateDoctorDto } from '../domain/addDoctor.dto';

export const addDoctor = async (data: CreateDoctorDto) => {
  return await client({
    url: 'v1/patient/clinic/owndoctor',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
