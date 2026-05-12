import {
  DistrictResponseItemDto,
  TableRowDistrictDto,
} from '../../domain/district.dto';

export const mapDistrictDtoToTable = (
  data: DistrictResponseItemDto
): TableRowDistrictDto => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    stateId: data.stateId,
    stateName: data.stateName,
    countryName: data.countryName,
    isActive: data.isActive,
  };
};
