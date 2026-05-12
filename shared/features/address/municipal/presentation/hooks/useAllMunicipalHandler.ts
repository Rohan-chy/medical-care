import { mapMunicipalDtoToTable } from '../../application/mapper/mapDtoToTable';
import { useGetMunicipal } from '../../application/usecases/useGetMunicipal';
import { TableRowMunicipalDto } from '../../domain/municipal.dto';
import { useState } from 'react';

export const useAllMunicipalHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingMunicipal, setEditingMunicipal] =
    useState<TableRowMunicipalDto | null>(null);

  const { data } = useGetMunicipal();

  const Municipal = Array.isArray(data?.data)
    ? data.data.map(mapMunicipalDtoToTable)
    : [];

  const handleEdit = (Municipal: TableRowMunicipalDto) => {
    setEditingMunicipal(Municipal);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingMunicipal(null); // reset form for adding
    setOpen(true);
  };

  return {
    Municipal,
    open,
    setOpen,
    editingMunicipal,
    setEditingMunicipal,
    handleEdit,
    handleAdd,
  };
};
