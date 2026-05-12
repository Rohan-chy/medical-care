//table row model
export type DoctorTableRowModel = {
  id: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp: string;
  countryCode: string;
  contactNumber: string;
  email: string;

  //transformed fields
  fullName: string;
  contact: string;
  genderLabel: string;
};
