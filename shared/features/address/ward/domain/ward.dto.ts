export type baseWardDto = {
  municipalityId: string;
  wardNumber: number;
  municipalityName?: string;
  isActive?: boolean;
};

//create dto
export type createWardDto = baseWardDto;

//update dto
export type updateWardDto = baseWardDto & {
  id: string;
};

//get response dto
export type WardResponseItemDto = baseWardDto & {
  id: string;
};

export type WardResponseDto = {
  data: WardResponseItemDto[];
};

//table row dto
export type TableRowWardDto = baseWardDto & {
  id: string;
};
