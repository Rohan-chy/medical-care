import {
  CountryResponseItemDTO,
  TableRowCountryDto,
} from '../../domain/country.dto';

export const mapCountryDtoToTable = (
  data: CountryResponseItemDTO
): TableRowCountryDto => {
  return {
    id: data.id,
    name: data.name,
    code: data.code,
    dialingCode: data.dialingCode,
    sortingId: data.sortingId,
    isActive: data.isActive,
  };
};
