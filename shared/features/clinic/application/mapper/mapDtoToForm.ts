import { format } from 'date-fns';
import { CreateClinicFormValues } from '../../domain/forms/createClinicForm';
import { ClinicResponse } from '../../domain/schemas/getClinic.schema';

export const mapDtoToForm = (
  clinic: ClinicResponse
): CreateClinicFormValues => ({
  ...clinic,
  pan: clinic.pan ?? '',
  registrationDate: format(new Date(clinic.registrationDate), 'yyyy-MM-dd'),
  latitude: clinic.latitude ?? 0,
  longitude: clinic.longitude ?? 0,
});
