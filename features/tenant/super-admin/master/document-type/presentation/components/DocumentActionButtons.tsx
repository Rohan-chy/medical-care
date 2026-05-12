import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { DocumentTypeResponseItemDto } from '../../domain/documentType.dto';
import { useDeleteDocumentType } from '../../application/usecases/useDeleteDocumentType';

const DocumentActionButtons = ({
  data,
  handleEdit,
}: {
  data: DocumentTypeResponseItemDto;
  handleEdit: (data: DocumentTypeResponseItemDto) => void;
}) => {
  const { mutate: deleteDocument, isPending: deletePending } =
    useDeleteDocumentType();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteDocument({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default DocumentActionButtons;
