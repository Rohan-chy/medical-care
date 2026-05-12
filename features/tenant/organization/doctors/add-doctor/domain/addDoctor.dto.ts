type BaseAddDoctorDto = {
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: number;
  countryCode: string;
  contactNumber: string;
};

//create api
export type CreateDoctorDto = BaseAddDoctorDto & {
  email: string;
  userName: string;
  password: string;
};

//update api
export type UpdateDoctorDto = BaseAddDoctorDto & {
  id: string;
  dateOfBirth: string;
  dateOfBirthNp: string;
};

//get api
export type ResponseAddDoctorItemDto = BaseAddDoctorDto & {
  id: string;
  dateOfBirth: string;
  dateOfBirthNp: string;
  email: string;
};

export type ResponseAddDoctorDto = {
  data: ResponseAddDoctorItemDto[];
};
