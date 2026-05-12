type BaseServiceDto = {
  name: string;
  price: number;
  type: string;
  branchId: string;
  description?: string;
  durationInMinutes: number;
  isAvailable?: boolean;
  isOnlineAvailable?: boolean;
};

//create dto
export type CreateServiceDto = BaseServiceDto;

//update dto
export type UpdateServiceDto = BaseServiceDto & {
  id: string;
};

//get response dto
export type ResponseServiceItemDto = BaseServiceDto & {
  id: string;
  branchName: string;
};

export type ResponseServiceDto = {
  data: ResponseServiceItemDto[];
};

//table row dto
export type TableRowServiceDto = BaseServiceDto & {
  id: string;
  branchName: string;
};
