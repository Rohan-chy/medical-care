export type baseOrganizationProfileDto = {
  name: string;
  location: string;
  type: string;
  pan: string;
  contactNo: string;
  manager: string;
  registrationNumber: string;
  registrationDate: string;
};

export type updateOrganizationProfileDto = {
  id: string;
  longitude?: number;
  latitude?: number;
};

export type organizationProfileResponseDto = baseOrganizationProfileDto & {
  clinicId: string;
  baseAddress: string;
  imageUrl: string;
};
