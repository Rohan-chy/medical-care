import { useState } from 'react';
import { useGetSalutation } from '../../application/usecases/useGetSalutation';
import { SalutationFormValues } from '../../domain/salutation.schema';
import { mapSalutationDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllSalutationHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingClinic, setEditingClinic] =
    useState<SalutationFormValues | null>(null);

  const { data } = useGetSalutation();

  const Clinics = data?.data?.map(mapSalutationDtoToTable) || [];

  const handleEdit = (Clinic: SalutationFormValues) => {
    setEditingClinic(Clinic);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingClinic(null); // reset form for adding
    setOpen(true);
  };

  return {
    Clinics,
    open,
    setOpen,
    editingClinic,
    handleEdit,
    handleAdd,
  };
};
