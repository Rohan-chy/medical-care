import { ColumnDef } from '@tanstack/react-table';
import WardActionButtons from '../components/WardActionButtons';
import { TableRowWardDto } from '../../domain/ward.dto';

export const WardColumns = (
  handleEdit: (Ward: TableRowWardDto) => void
): ColumnDef<TableRowWardDto>[] => [
  {
    accessorKey: 'municipalityName',
    header: 'Municipality',
  },
  {
    accessorKey: 'wardNumber',
    header: 'Ward No.',
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <WardActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
