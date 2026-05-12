import { useState } from 'react';
import { useGetDoctorSubcategory } from '../../application/usecases/useGetDoctorSubcategory';
import { TableRowDto } from '../../domain/doctorSubCategory.dto';
import { mapDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useDoctorSubCategoryHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingHospital, setEditingHospital] = useState<TableRowDto | null>(
    null
  );

  const { data: doctorsubCategory } = useGetDoctorSubcategory();
  const doctorsubCategoryData =
    doctorsubCategory?.data?.map(mapDtoToTable) || [];

  const handleEdit = (Hospital: TableRowDto) => {
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
    doctorsubCategoryData,
  };
};
