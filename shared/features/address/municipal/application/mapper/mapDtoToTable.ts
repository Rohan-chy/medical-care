import {
  MunicipalResponseItemDto,
  TableRowMunicipalDto,
} from '../../domain/municipal.dto';

export const mapMunicipalDtoToTable = (
  data: MunicipalResponseItemDto
): TableRowMunicipalDto => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    districtId: data.districtId,
    districtName: data.districtName,
    stateName: data.stateName,
    countryName: data.countryName,
    type: data.type,
    isActive: data.isActive,
  };
};
