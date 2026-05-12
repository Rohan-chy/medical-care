import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import ServiceActionButton from '../components/ServiceActionButton';
import { TableRowServiceDto } from '../../domain/service.dto';

export const serviceColumns = (
  handleEdit: (service: TableRowServiceDto) => void
): ColumnDef<TableRowServiceDto>[] => [
  {
    accessorKey: 'branchName',
    header: 'Branch',
  },
  {
    accessorKey: 'name',
    header: 'Service',
  },

  {
    accessorKey: 'type',
    header: 'Type',
  },

  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      return row.original.price ?? 0;
    },
  },

  {
    accessorKey: 'durationInMinutes',
    header: 'Duration(mins)',
  },

  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.original.description;

      if (!description) return '-';

      return (
        <AppTooltip content={description}>
          <span className="max-w-[200px] truncate block cursor-pointer">
            {description}
          </span>
        </AppTooltip>
      );
    },
  },

  {
    accessorKey: 'isAvailable',
    header: 'Availability',
    cell: ({ row }) => {
      const isAvailable = row.original.isAvailable;

      return (
        <Badge
          className={
            isAvailable
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          }
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </Badge>
      );
    },
  },

  {
    accessorKey: 'isOnlineAvailable',
    header: 'Online',
    cell: ({ row }) => {
      const isOnline = row.original.isOnlineAvailable;

      return (
        <Badge
          className={
            isOnline
              ? 'bg-blue-100 text-blue-700 border border-blue-200'
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          }
        >
          {isOnline ? 'Online' : 'Offline'}
        </Badge>
      );
    },
  },

  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <ServiceActionButton data={row.original} handleEdit={handleEdit} />
      );
    },
  },
];
