import {
  ResponseServiceItemDto,
  TableRowServiceDto,
} from '../../domain/service.dto';

export const mapDtoToTable = (
  data: ResponseServiceItemDto
): TableRowServiceDto => {
  return {
    id: data.id,
    name: data.name,
    price: data.price,
    type: data.type,
    branchId: data.branchId,
    branchName: data.branchName,
    description: data.description ?? '',
    durationInMinutes: data.durationInMinutes,
    isAvailable: data.isAvailable ?? false,
    isOnlineAvailable: data.isOnlineAvailable ?? false,
  };
};
