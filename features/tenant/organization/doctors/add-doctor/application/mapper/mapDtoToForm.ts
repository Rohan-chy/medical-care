import { ResponseAddDoctorItemDto } from '../../domain/addDoctor.dto';
import { UpdateDoctorFormValues } from '../../domain/addDoctor.schema';

export const mapDtoToForm = (
  data: ResponseAddDoctorItemDto
): UpdateDoctorFormValues => {
  return {
    id: data.id,
    title: data.title,
    firstName: data.firstName,
    middleName: data.middleName ?? '',
    lastName: data.lastName,
    gender: data.gender,
    countryCode: data.countryCode,
    contactNumber: data.contactNumber,
    dateOfBirth: data.dateOfBirth,
    dateOfBirthNp: data.dateOfBirthNp,
  };
};
