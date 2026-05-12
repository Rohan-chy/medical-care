import { TableRowWardDto } from '../../domain/ward.dto';
import { WardFormValues } from '../../domain/ward.schema';

export const mapWardDtoToForm = (data: TableRowWardDto): WardFormValues => {
  return {
    id: data.id,
    municipalityId: data.municipalityId,
    wardNumber: data.wardNumber,
    isActive: data.isActive,
  };
};
