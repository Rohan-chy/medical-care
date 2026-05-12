import { DoctorCategoryTableRow } from '../../domain/doctorCategory.dto';
import { updateCategorySchemaFormValues } from '../../domain/schema/doctorCategory.schema';

export const mapDoctorCategoryToUpdateForm = (
  item: DoctorCategoryTableRow
): updateCategorySchemaFormValues => {
  return {
    id: item.id, // required here
    categoryName: item.categoryName,
    description: item.description || '',
  };
};
