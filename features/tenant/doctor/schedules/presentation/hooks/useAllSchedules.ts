import { DoctorScheduleResponseItemDto } from '../../domain/doctorSchedule.dto';
import { useState } from 'react';

export const useAllDoctorSchedule = () => {
  const [open, setOpen] = useState(false);
  const [editingDoctorSchedule, setEditingDoctorSchedule] =
    useState<DoctorScheduleResponseItemDto | null>(null);

  const handleEdit = (DoctorSchedule: DoctorScheduleResponseItemDto) => {
    setEditingDoctorSchedule(DoctorSchedule);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDoctorSchedule(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingDoctorSchedule,
    setEditingDoctorSchedule,
    handleEdit,
    handleAdd,
  };
};
