import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDistrict } from '../../application/usecases/useDeleteDistrict';
import { TableRowDistrictDto } from '../../domain/district.dto';

const DistrictActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowDistrictDto;
  handleEdit: (data: TableRowDistrictDto) => void;
}) => {
  const { mutate: deleteDistrict, isPending: deletePending } =
    useDeleteDistrict();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDistrict({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DistrictActionButtons;
