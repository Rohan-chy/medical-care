import { useGetDistrict } from '../../application/usecases/useGetDistrict';
import { useState } from 'react';
import { TableRowDistrictDto } from '../../domain/district.dto';
import { mapDistrictDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllDistrictHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingDistrict, setEditingDistrict] =
    useState<TableRowDistrictDto | null>(null);

  const { data } = useGetDistrict();

  const District = Array.isArray(data?.data)
    ? data.data.map(mapDistrictDtoToTable)
    : [];

  const handleEdit = (District: TableRowDistrictDto) => {
    setEditingDistrict(District);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDistrict(null); // reset form for adding
    setOpen(true);
  };

  return {
    District,
    open,
    setOpen,
    editingDistrict,
    setEditingDistrict,
    handleEdit,
    handleAdd,
  };
};
