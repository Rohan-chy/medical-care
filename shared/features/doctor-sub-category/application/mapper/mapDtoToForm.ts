import { DoctorSubCategory } from '../../domain/doctorSubCategory.dto';
import { subcategorySchemaFormValues } from '../../domain/doctorSubcategory.schema';

export const mapDoctorSubCategoryToForm = (
  item: DoctorSubCategory
): subcategorySchemaFormValues => {
  return {
    id: item.id,
    subCategoryName: item.subCategoryName,
    description: item.description || '',
    doctorCategoryId: item.doctorCategoryId,
  };
};
