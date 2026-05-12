import { TableRowCountryDto } from '../../domain/country.dto';
import { CountryFormValues } from '../../domain/country.schema';

export const mapCountryDtoToForm = (
  data: TableRowCountryDto
): CountryFormValues => {
  return {
    id: data.id,
    name: data.name,
    code: data.code,
    dialingCode: data.dialingCode,
    sortingId: data.sortingId,
    isActive: data.isActive,
  };
};
