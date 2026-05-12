import { useState } from 'react';
import { TableRowModel } from '../../domain/branch.dto';
import { useGetOwnBranch } from '../../application/usecases/useGetOwnBranch';

export const useAllBranchHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState<TableRowModel | null>(
    null
  );

  const { data: branches } = useGetOwnBranch();

  const handleEdit = (Branch: TableRowModel) => {
    setEditingBranch(Branch);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingBranch(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingBranch,
    handleEdit,
    handleAdd,
    BranchData: branches?.data,
  };
};
