import { CreateDoctorFormValues } from '../../domain/createDoctor.schema';
// import { DoctorResponse } from '../../domain/getDoctors.schema';

export const mapDoctorToFormValues = (doctor: any): CreateDoctorFormValues => ({
  title: doctor.title,
  firstName: doctor.firstName,
  middleName: doctor.middleName ?? '',
  lastName: doctor.lastName,
  gender: String(doctor.gender), // number → string
  dateOfBirth: doctor.dateOfBirth.split('T')[0],
  dateOfBirthNp: doctor.dateOfBirthNp ?? '',
  countryCode: doctor.countryCode ?? '+977',
  contactNumber: doctor.contactNumber,
  email: doctor.email,
  userName: doctor.email, // or doctor.userName if available
  password: '',
});
