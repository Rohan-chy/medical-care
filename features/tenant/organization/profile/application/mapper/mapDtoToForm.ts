import { organizationProfileResponseDto } from '../../domain/organizationProfile.dto';
import { OrganizationProfileFormValues } from '../../domain/schema/organizationProfile.schema';

export const mapDtoToForm = (
  data: organizationProfileResponseDto
): OrganizationProfileFormValues => {
  return {
    id: data.clinicId,
    name: data.name,
    location: data.location,
    type: data.type,
    pan: data.pan,
    contactNo: data.contactNo,
    manager: data.manager,
    registrationNumber: data.registrationNumber,
    registrationDate: data.registrationDate,
  };
};
