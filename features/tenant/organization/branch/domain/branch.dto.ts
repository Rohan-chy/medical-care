type BranchImageDto = {
  id: string;
  imageUrl: string;
};

type BaseBranchDto = {
  name: string;
  location: string;
  contactNo: string;
  latitude: number;
  longitude: number;
};

export type CreateBranchDto = BaseBranchDto;

export type UpdateBranchDto = BaseBranchDto & {
  id: string;
};

export type BranchItemDto = BaseBranchDto & {
  id: string;
  isMainBranch: boolean;
  branchImages: BranchImageDto[];
};

export type BranchDto = {
  data: BranchItemDto[];
};

export type TableRowModel = BaseBranchDto & {
  id: string;
  isMainBranch: boolean;
  branchImages: BranchImageDto[];
};
