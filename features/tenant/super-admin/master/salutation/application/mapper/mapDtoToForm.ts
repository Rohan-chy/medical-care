import { TableRowSalutationDto } from '../../domain/salutation.dto';
import { SalutationFormValues } from '../../domain/salutation.schema';

export const mapSalutationDtoToForm = (
  data: TableRowSalutationDto
): SalutationFormValues => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
  };
};
