import { ColumnDef } from '@tanstack/react-table';
import DistrictActionButtons from '../components/DistrictActionButtons';
import { TableRowDistrictDto } from '../../domain/district.dto';

export const DistrictColumns = (
  handleEdit: (District: TableRowDistrictDto) => void
): ColumnDef<TableRowDistrictDto>[] => [
  {
    accessorKey: 'name',
    header: 'District',
  },
  {
    accessorKey: 'stateName',
    header: 'State',
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
      <DistrictActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
