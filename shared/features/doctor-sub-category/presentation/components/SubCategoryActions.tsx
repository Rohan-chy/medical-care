import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { TableRowDto } from '../../domain/doctorSubCategory.dto';
import { useDeleteDoctorSubCategory } from '../../application/usecases/useDeleteDoctorSubCategory';

const SubCategoryActions = ({
  data,
  handleEdit,
}: {
  data: TableRowDto;
  handleEdit: (data: TableRowDto) => void;
}) => {
  const { mutate: deleteDoctorSubCategory, isPending: deletePending } =
    useDeleteDoctorSubCategory();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDoctorSubCategory(row.id)}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default SubCategoryActions;
