export type SalutationItem = {
  name: string;
  description?: string;
};

//create dto
export type createSalutationDto = SalutationItem;

//update dto
export type updateSalutationDto = SalutationItem & {
  id: string;
};

//get response
export type SalutationResponseDtoItem = SalutationItem & {
  id: string;
};

export type SalutationResponseDto = {
  data: SalutationResponseDtoItem[];
};

//table row model
export type TableRowSalutationDto = SalutationItem & {
  id: string;
};
