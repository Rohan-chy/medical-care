import { TableRowMunicipalDto } from '../../domain/municipal.dto';
import { MunicipalFormValues } from '../../domain/municipal.schema';

export const mapMunicipalDtoToForm = (
  data: TableRowMunicipalDto
): MunicipalFormValues => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    districtId: data.districtId,
    type: data.type,
    isActive: data.isActive,
  };
};
