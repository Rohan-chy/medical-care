export type BaseHospitaClinicDto = {
  name: string;
  location: string;
  type?: string;

  pan?: string;
  contactNo: string;

  manager?: string;
  registrationNumber?: string;
  registrationDate?: string | null;

  longitude?: number;
  latitude?: number;

  email: string;
  password: string;
};

export type CreateHospitaClinicDto = BaseHospitaClinicDto;
export type UpdateHospitaClinicDto = CreateHospitaClinicDto;

export type HospitalClinicItemDto = BaseHospitaClinicDto & {
  id: string;
};

export type HospitalClinicDto = {
  data: HospitalClinicItemDto[];
};
