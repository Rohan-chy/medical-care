'use client';

import { DoctorTableRowModel } from '../../domain/doctorTableRow.model';
import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDoctor } from '../../application/usecases/useDeleteDoctor';

const DoctorActions = ({
  data,
  handleEdit,
}: {
  data: DoctorTableRowModel;
  handleEdit: (data: DoctorTableRowModel) => void;
}) => {
  const { mutate: deleteDoctor, isPending: deletePending } = useDeleteDoctor();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDoctor({ id: row.id })}
      disableActions={deletePending}
      loading={deletePending}
    />
  );
};

export default DoctorActions;
