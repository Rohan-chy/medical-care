import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteBranch } from '../../application/usecases/useDeleteBranch';
import { BranchItemDto } from '../../domain/branch.dto';
import { CustomButton } from '@/components/extended/extended-button';
import { Icons } from '@/shared/icons';
import { DeleteAlert } from '@/components/custom-components/delete-alert';

const BranchActions = ({
  data,
  handleEdit,
}: {
  data: BranchItemDto;
  handleEdit: (data: BranchItemDto) => void;
}) => {
  const { mutate: deleteBranch, isPending: deletePending } = useDeleteBranch();

  return (
    <div className="flex items-center gap-1">
      <CustomButton
        size="icon"
        className="h-6 border border-white"
        onClick={() => handleEdit(data)}
      >
        <Icons.Pencil className="w-3.5 h-3.5" />
      </CustomButton>

      {/* Delete Button */}
      <DeleteAlert
        disabled={deletePending}
        loading={deletePending}
        onClick={() => deleteBranch(data)}
      />
      {/* <TableUpdateDeleteActions
        data={data}
        onEdit={handleEdit}
        onDelete={(row) => deleteBranch({ id: row.id })}
        disableDelete={deletePending}
        loading={deletePending}
      /> */}
    </div>
  );
};

export default BranchActions;
