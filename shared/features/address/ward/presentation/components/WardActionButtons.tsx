import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteWard } from '../../application/usecases/useDeleteWard';
import { TableRowWardDto } from '../../domain/ward.dto';

const WardActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowWardDto;
  handleEdit: (data: TableRowWardDto) => void;
}) => {
  const { mutate: deleteWard, isPending: deletePending } = useDeleteWard();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteWard({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default WardActionButtons;
