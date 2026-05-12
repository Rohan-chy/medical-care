import { ResponseAddDoctorItemDto } from '../../domain/addDoctor.dto';
import { DoctorTableRowModel } from '../../domain/doctorTableRow.model';
import { genderText } from '@/shared/optionsData/statusOptions';

export const mapDoctorDtoToTableRow = (
  data: ResponseAddDoctorItemDto
): DoctorTableRowModel => {
  return {
    id: data.id,
    title: data.title,
    firstName: data.firstName,
    middleName: data.middleName ?? '',
    lastName: data.lastName,
    gender: data.gender,
    dateOfBirth: data.dateOfBirth,
    dateOfBirthNp: data.dateOfBirthNp,
    countryCode: data.countryCode,
    contactNumber: data.contactNumber,
    email: data.email,

    //  //transformed fields
    genderLabel: genderText(data.gender),
    fullName:
      `${data.title} ${data.firstName} ${data.middleName ?? ''} ${data.lastName}`
        .replace(/\s+/g, ' ')
        .trim(),
    contact: `${data.countryCode} ${data.contactNumber}`,
  };
};
