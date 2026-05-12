export type BaseDoctorCategory = {
  categoryName: string;
  description?: string;
};

//create dto
export type CreateDoctorCategory = BaseDoctorCategory;

//update dto
export type UpdateDoctorCategory = BaseDoctorCategory & {
  id: string;
};

//get dto
export type DoctorCategory = BaseDoctorCategory & {
  id: string;
  imageBaseAddress: string;
  imagePath: string;
};

export type CategoryResponse = {
  data: DoctorCategory[];
};

//get dto
export type DoctorCategoryTableRow = BaseDoctorCategory & {
  id: string;
  imageBaseAddress?: string;
  imagePath?: string;
};
