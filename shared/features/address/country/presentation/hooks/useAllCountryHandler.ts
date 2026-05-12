import { useState } from 'react';
import { useGetCountry } from '../../application/usecases/useGetCountry';
import { TableRowCountryDto } from '../../domain/country.dto';
import { mapCountryDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllCountryHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingCountry, setEditingCountry] =
    useState<TableRowCountryDto | null>(null);

  const { data } = useGetCountry();

  const Country = Array.isArray(data?.data)
    ? data.data.map(mapCountryDtoToTable)
    : [];

  const handleEdit = (Country: TableRowCountryDto) => {
    setEditingCountry(Country);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingCountry(null); // reset form for adding
    setOpen(true);
  };

  return {
    Country,
    open,
    setOpen,
    editingCountry,
    setEditingCountry,
    handleEdit,
    handleAdd,
  };
};
