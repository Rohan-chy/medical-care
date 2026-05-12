import { TableRowServiceDto } from '../../domain/service.dto';
import { ServiceFormValues } from '../../domain/service.schema';

export const mapDtoToForm = (data: TableRowServiceDto): ServiceFormValues => {
  return {
    id: data.id,
    name: data.name,
    price: data.price,
    type: data.type,
    branchId: data.branchId,
    description: data.description ?? '',
    durationInMinutes: data.durationInMinutes,
    isAvailable: data.isAvailable ?? false,
    isOnlineAvailable: data.isOnlineAvailable ?? false,
  };
};
