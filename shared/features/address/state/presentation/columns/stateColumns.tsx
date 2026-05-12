import { ColumnDef } from '@tanstack/react-table';
import StateActionButtons from '../components/StateActionButtons';
import { TableRowStateDto } from '../../domain/state.dto';

export const StateColumns = (
  handleEdit: (State: TableRowStateDto) => void
): ColumnDef<TableRowStateDto>[] => [
  {
    accessorKey: 'name',
    header: 'State Name',
  },
  {
    accessorKey: 'countryName',
    header: 'Country',
  },
  {
    accessorKey: 'sortingId',
    header: 'Sort Order',
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <StateActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
