import { useState } from 'react';
import { useGetService } from '../../application/usecases/useGetService';
import { TableRowServiceDto } from '../../domain/service.dto';

export const useAllServiceHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingService, setEditingService] =
    useState<TableRowServiceDto | null>(null);

  const { data: ServiceData } = useGetService();

  const handleEdit = (Service: TableRowServiceDto) => {
    setEditingService(Service);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingService(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingService,
    handleEdit,
    handleAdd,
    ServiceData,
  };
};
