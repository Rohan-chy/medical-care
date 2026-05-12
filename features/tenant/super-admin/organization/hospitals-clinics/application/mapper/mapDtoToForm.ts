import { HospitalClinicItemDto } from '../../domain/hospitalClinic.dto';
import { HospitalClinicFormValues } from '../../domain/hospitalClinic.schema';

export const mapDtoToForm = (
  data: HospitalClinicItemDto
): HospitalClinicFormValues => {
  return {
    id: data.id,

    name: data.name,
    location: data.location,
    type: data.type,

    pan: data.pan,
    contactNo: data.contactNo,

    manager: data.manager,
    registrationNumber: data.registrationNumber,
    registrationDate: data.registrationDate,

    longitude: data.longitude,
    latitude: data.latitude,

    email: data.email,
    password: '',
  };
};
