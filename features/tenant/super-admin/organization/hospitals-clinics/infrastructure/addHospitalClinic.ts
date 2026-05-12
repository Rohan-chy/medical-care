import client from '@/core/network/httpClient';
import { CreateHospitaClinicDto } from '../domain/hospitalClinic.dto';

export const addHospitalClinic = async (data: CreateHospitaClinicDto) => {
  return client({
    url: 'v1/patient/clinic/clinicCreate',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
