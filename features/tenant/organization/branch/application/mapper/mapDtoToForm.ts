import { BranchItemDto } from '../../domain/branch.dto';
import { BranchFormValues } from '../../domain/branch.schema';

export const mapDtoToForm = (data: BranchItemDto): BranchFormValues => {
  return {
    id: data.id,
    name: data.name,
    location: data.location,
    contactNo: data.contactNo,
    latitude: data.latitude,
    longitude: data.longitude,
  };
};
