export type CountryDTO = {
  name: string;
  code: string;
  dialingCode: string;
  sortingId: number;
  isActive?: boolean;
};

//create dto
export type createCountryDto = CountryDTO;

//update dto
export type updateCountryDto = CountryDTO & {
  id: string;
};

//get response
export type CountryResponseItemDTO = CountryDTO & {
  id: string;
};

export interface CountryResponseDTO {
  data: CountryResponseItemDTO[];
}

//table row dto
export type TableRowCountryDto = CountryDTO & {
  id: string;
};
