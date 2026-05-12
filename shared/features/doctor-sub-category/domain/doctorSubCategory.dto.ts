export type BaseDoctorSubCategoryDto = {
  subCategoryName: string;
  description?: string;
  doctorCategoryId: string;
};

//create dto
export type CreateDoctorSubCategoryDto = BaseDoctorSubCategoryDto;

//update dto
export type UpdateDoctorSubCategoryDto = BaseDoctorSubCategoryDto & {
  id: string;
};

//get dto
export type DoctorSubCategory = BaseDoctorSubCategoryDto & {
  id: string;
  imageBaseAddress: string;
  imageUrl: string;
  doctorCategoryName: string;
};

export type DoctorSubCategoryResponse = {
  data: DoctorSubCategory[];
};

// table row dto
export type TableRowDto = BaseDoctorSubCategoryDto & {
  id: string;
  imageBaseAddress: string;
  imageUrl: string;
  doctorCategoryName: string;
};
