import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteMunicipal } from '../../application/usecases/useDeleteMunicipal';
import { TableRowMunicipalDto } from '../../domain/municipal.dto';

const MunicipalActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowMunicipalDto;
  handleEdit: (data: TableRowMunicipalDto) => void;
}) => {
  const { mutate: deleteMunicipal, isPending: deletePending } =
    useDeleteMunicipal();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteMunicipal({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default MunicipalActionButtons;
