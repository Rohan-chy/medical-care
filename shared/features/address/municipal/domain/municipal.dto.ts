export type MunicipalDto = {
  name: string;
  sortingId: number;
  districtId: string;
  type: string;
  isActive?: boolean;
};

//create dto
export type createMunicipalDto = MunicipalDto;

//create dto
export type updateMunicipalDto = MunicipalDto & {
  id: string;
};

//get response dto
export type MunicipalResponseItemDto = MunicipalDto & {
  id: string;
  districtName: string;
  stateName: string;
  countryName: string;
};

export type MunicipalResponseDto = {
  data: MunicipalResponseItemDto[];
};

//get response dto
export type TableRowMunicipalDto = MunicipalDto & {
  id: string;
  districtName: string;
  stateName: string;
  countryName: string;
};
