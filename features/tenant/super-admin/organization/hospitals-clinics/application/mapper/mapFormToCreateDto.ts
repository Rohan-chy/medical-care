import { CreateHospitaClinicDto } from '../../domain/hospitalClinic.dto';
import { HospitalClinicFormValues } from '../../domain/hospitalClinic.schema';

export const mapFormToCreateDto = (
  values: HospitalClinicFormValues
): CreateHospitaClinicDto => {
  return {
    name: values.name,
    location: values.location,
    type: values.type ?? '',

    pan: values.pan ?? '',
    contactNo: values.contactNo,

    manager: values.manager ?? '',
    registrationNumber: values.registrationNumber ?? '',
    registrationDate: values.registrationDate ?? null,

    longitude: values.longitude ?? 0,
    latitude: values.latitude ?? 0,

    email: values.email,
    password: values.password,
  };
};
