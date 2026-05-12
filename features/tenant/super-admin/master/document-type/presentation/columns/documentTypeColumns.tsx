import { ColumnDef } from '@tanstack/react-table';
import { documentTypeItems } from '../../application/utils/documentTypeItems';
import DocumentActionButtons from '../components/DocumentActionButtons';
import { DocumentTypeResponseItemDto } from '../../domain/documentType.dto';

export const documentTypeColumns = (
  handleEdit: (data: DocumentTypeResponseItemDto) => void
): ColumnDef<DocumentTypeResponseItemDto>[] => [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'documentType',
    header: 'Document Type',
    cell: ({ row }) => {
      const value = row.original.documentType;

      const item = documentTypeItems?.find((item) => item.value === value);

      return <p>{item?.label ?? '-'}</p>;
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <DocumentActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
