import client from '@/core/network/httpClient';
import { UpdateDoctorDto } from '../domain/addDoctor.dto';

export const updateDoctor = async (data: UpdateDoctorDto) => {
  return await client({
    url: `v1/patient/clinic/doctorId/${data.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
