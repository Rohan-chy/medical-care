import {
  DoctorSubCategory,
  TableRowDto,
} from '../../domain/doctorSubCategory.dto';

export const mapDtoToTable = (item: DoctorSubCategory): TableRowDto => {
  return {
    id: item.id,
    subCategoryName: item.subCategoryName,
    description: item.description ?? '',
    doctorCategoryId: item.doctorCategoryId,

    imageBaseAddress: item.imageBaseAddress,
    imageUrl: item.imageUrl,
    doctorCategoryName: item.doctorCategoryName,
  };
};
