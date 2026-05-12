import {
  DoctorCategory,
  DoctorCategoryTableRow,
} from '../../domain/doctorCategory.dto';

export const mapDoctorCategoryToTable = (
  item: DoctorCategory
): DoctorCategoryTableRow => {
  return {
    id: item.id, // required here
    categoryName: item.categoryName,
    description: item.description || '',
    imageBaseAddress: item.imageBaseAddress || '',
    imagePath: item.imagePath || '',
  };
};
