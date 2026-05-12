import { useState } from 'react';
import { useGetState } from '../../application/usecases/useGetState';
import { TableRowStateDto } from '../../domain/state.dto';
import { mapStateDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllStateHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingState, setEditingState] = useState<TableRowStateDto | null>(
    null
  );

  const { data } = useGetState();

  const State = Array.isArray(data?.data)
    ? data.data.map(mapStateDtoToTable)
    : [];

  const handleEdit = (State: TableRowStateDto) => {
    setEditingState(State);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingState(null); // reset form for adding
    setOpen(true);
  };

  return {
    State,
    open,
    setOpen,
    editingState,
    setEditingState,
    handleEdit,
    handleAdd,
  };
};
