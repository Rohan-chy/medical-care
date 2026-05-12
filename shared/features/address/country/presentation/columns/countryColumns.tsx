import { ColumnDef } from '@tanstack/react-table';
import CountryActionButtons from '../components/CountryActionButtons';
import { TableRowCountryDto } from '../../domain/country.dto';

export const countryColumns = (
  handleEdit: (country: TableRowCountryDto) => void
): ColumnDef<TableRowCountryDto>[] => [
  {
    accessorKey: 'name',
    header: 'Country Name',
  },
  {
    accessorKey: 'code',
    header: 'Country Code',
  },
  {
    accessorKey: 'dialingCode',
    header: 'Dialing Code',
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
      <CountryActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
