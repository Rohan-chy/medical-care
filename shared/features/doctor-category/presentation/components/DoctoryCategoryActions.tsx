import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDoctorCategory } from '../../application/usecases/useDeleteDoctorCategory';
import { DoctorCategoryTableRow } from '../../domain/doctorCategory.dto';

const DoctorCategoryActions = ({
  data,
  handleEdit,
}: {
  data: DoctorCategoryTableRow;
  handleEdit: (data: DoctorCategoryTableRow) => void;
}) => {
  const { mutate: deleteDoctorCategory, isPending: deletePending } =
    useDeleteDoctorCategory();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDoctorCategory(row.id)}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DoctorCategoryActions;
