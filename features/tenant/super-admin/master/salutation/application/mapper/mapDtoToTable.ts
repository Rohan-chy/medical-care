import {
  SalutationResponseDtoItem,
  TableRowSalutationDto,
} from '../../domain/salutation.dto';

export const mapSalutationDtoToTable = (
  data: SalutationResponseDtoItem
): TableRowSalutationDto => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
  };
};
