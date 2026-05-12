import { useState } from 'react';
import { ResponseAddDoctorItemDto } from '../../domain/addDoctor.dto';
import { useGetDoctor } from '../../application/usecases/useGetDoctor';
import { mapDoctorDtoToTableRow } from '../../application/mapper/mapDoctorDtoToTable';

export const useAllDoctorHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] =
    useState<ResponseAddDoctorItemDto | null>(null);

  const { data: doctors } = useGetDoctor();
  const mappedDoctorData = (doctors?.data || []).map(mapDoctorDtoToTableRow);

  const handleEdit = (Doctor: ResponseAddDoctorItemDto) => {
    setEditingDoctor(Doctor);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDoctor(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingDoctor,
    handleEdit,
    handleAdd,
    DoctorData: mappedDoctorData,
  };
};
