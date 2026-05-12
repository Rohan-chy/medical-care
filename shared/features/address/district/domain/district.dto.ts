export type DistrictDto = {
  name: string;
  sortingId: number;
  stateId: string;
  isActive?: boolean;
};

//create dto
export type createDistrictDto = DistrictDto;

//update dto
export type updateDistrictDto = DistrictDto & {
  id: string;
};

//get response dto
export type DistrictResponseItemDto = DistrictDto & {
  id: string;
  stateName: string;
  countryName: string;
};

export type DistrictResponseDTO = {
  data: DistrictResponseItemDto[];
};

//table row dto
export type TableRowDistrictDto = DistrictDto & {
  id: string;
  stateName: string;
  countryName: string;
};
