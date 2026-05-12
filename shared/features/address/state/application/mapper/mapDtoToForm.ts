import { TableRowStateDto } from '../../domain/state.dto';
import { StateFormValues } from '../../domain/state.schema';

export const mapStateDtoToForm = (data: TableRowStateDto): StateFormValues => {
  return {
    id: data.id,
    name: data.name,
    sortingId: data.sortingId,
    countryId: data.countryId,
    isActive: data.isActive,
  };
};
