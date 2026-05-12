import { useGetWard } from '../../application/usecases/useGetWard';
import { useState } from 'react';
import { TableRowWardDto } from '../../domain/ward.dto';

export const useAllWard = () => {
  const { data } = useGetWard();
  const Ward = data?.data;

  const [open, setOpen] = useState(false);
  const [editingWard, setEditingWard] = useState<TableRowWardDto | null>(null);

  const handleEdit = (Ward: TableRowWardDto) => {
    setEditingWard(Ward);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingWard(null); // reset form for adding
    setOpen(true);
  };

  return {
    Ward,
    open,
    setOpen,
    editingWard,
    setEditingWard,
    handleEdit,
    handleAdd,
  };
};
