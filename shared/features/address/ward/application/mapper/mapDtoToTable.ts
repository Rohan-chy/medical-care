import { TableRowWardDto, WardResponseItemDto } from '../../domain/ward.dto';

export const mapWardDtoToTable = (
  data: WardResponseItemDto
): TableRowWardDto => {
  return {
    id: data.id,
    municipalityId: data.municipalityId,
    municipalityName: data.municipalityName,
    wardNumber: data.wardNumber,
    isActive: data.isActive,
  };
};
