import { ColumnDef } from '@tanstack/react-table';
import MunicipalActionButtons from '../components/MunicipalActionButtons';
import { TableRowMunicipalDto } from '../../domain/municipal.dto';

export const MunicipalColumns = (
  handleEdit: (Municipal: TableRowMunicipalDto) => void
): ColumnDef<TableRowMunicipalDto>[] => [
  {
    accessorKey: 'name',
    header: 'Municipal',
  },
  {
    accessorKey: 'type',
    header: 'Municipal Type',
  },
  {
    accessorKey: 'districtName',
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
      <MunicipalActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
