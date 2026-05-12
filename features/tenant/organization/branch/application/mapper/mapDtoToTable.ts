import { BranchItemDto, TableRowModel } from '../../domain/branch.dto';

export const mapDtoToTable = (data: BranchItemDto): TableRowModel => {
  return {
    id: data.id,
    name: data.name,
    location: data.location,
    contactNo: data.contactNo,
    latitude: data.latitude,
    longitude: data.longitude,
    isMainBranch: data.isMainBranch,
    branchImages: data.branchImages,
  };
};
