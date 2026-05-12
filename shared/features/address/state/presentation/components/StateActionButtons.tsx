import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteState } from '../../application/usecases/useDeleteState';
import { TableRowStateDto } from '../../domain/state.dto';

const StateActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowStateDto;
  handleEdit: (data: TableRowStateDto) => void;
}) => {
  const { mutate: deleteState, isPending: deletePending } = useDeleteState();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteState({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default StateActionButtons;
