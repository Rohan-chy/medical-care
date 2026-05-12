import { useState } from 'react';
import { useGetOwnDoctorCategory } from '../../application/usecases/useGetOwnDoctorCategory';
import { DoctorCategoryTableRow } from '../../domain/doctorCategory.dto';
import { mapDoctorCategoryToTable } from '../../application/mapper/mapDtoToTable';

export const useDoctorCategoryHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingHospital, setEditingHospital] =
    useState<DoctorCategoryTableRow | null>(null);

  const { data: ownDoctorCategory } = useGetOwnDoctorCategory();

  const doctorCategoryData =
    ownDoctorCategory?.data?.map(mapDoctorCategoryToTable) || [];

  const handleEdit = (Hospital: DoctorCategoryTableRow) => {
    setEditingHospital(Hospital);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingHospital(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingHospital,
    setEditingHospital,
    handleEdit,
    handleAdd,
    doctorCategoryData,
  };
};
