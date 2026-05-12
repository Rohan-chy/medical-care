import { StateResponseItemDto, TableRowStateDto } from '../../domain/state.dto';

export const mapStateDtoToTable = (
  data: StateResponseItemDto
): TableRowStateDto => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    countryId: data.countryId,
    countryName: data.countryName,
    isActive: data.isActive,
  };
};
