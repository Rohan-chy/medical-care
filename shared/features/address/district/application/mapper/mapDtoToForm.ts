import { TableRowDistrictDto } from '../../domain/district.dto';
import { DistrictFormValues } from '../../domain/district.schema';

export const mapDistrictDtoToForm = (
  data: TableRowDistrictDto
): DistrictFormValues => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    stateId: data.stateId,
    isActive: data.isActive,
  };
};
