import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { TableRowProductCategoryDto } from '../../domain/productCategory.dto';
import { useDeleteProductCategory } from '../../application/usecases/useDeleteProductCategory';

const ProductCategoryActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowProductCategoryDto;
  handleEdit: (data: TableRowProductCategoryDto) => void;
}) => {
  const { mutate: deleteProductCategory, isPending: deletePending } =
    useDeleteProductCategory();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteProductCategory({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default ProductCategoryActionButtons;
