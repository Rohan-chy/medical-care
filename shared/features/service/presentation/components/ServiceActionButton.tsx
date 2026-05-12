import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteService } from '../../application/usecases/useDeleteService';
import { TableRowServiceDto } from '../../domain/service.dto';

const ServiceActionButton = ({
  data,
  handleEdit,
}: {
  data: TableRowServiceDto;
  handleEdit: (data: TableRowServiceDto) => void;
}) => {
  const { mutate: deleteBranch, isPending: deletePending } = useDeleteService();

  return (
    <div className="flex items-center gap-1">
      <TableUpdateDeleteActions
        data={data}
        onEdit={handleEdit}
        onDelete={(row) => deleteBranch({ id: row.id })}
        disableDelete={deletePending}
        loading={deletePending}
      />
    </div>
  );
};

export default ServiceActionButton;
