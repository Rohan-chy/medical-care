export interface StateDto {
  name: string;
  sortingId: number;
  countryId: string;
  countryName?: string;
  isActive?: boolean;
}

//create dto
export type CreateStateDto = StateDto;

//update dto
export type UpdateStateDto = CreateStateDto & {
  id: string;
};

//update dto
export type StateResponseItemDto = CreateStateDto & {
  id: string;
};

export interface StateResponseDto {
  data: StateResponseItemDto[];
}

//update dto
export type TableRowStateDto = StateDto & {
  id: string;
};
