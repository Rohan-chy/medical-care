import { CustomButton } from '@/components/extended/extended-button';

export const patientColumns = (onViewDetails?: (id: string) => void) => [
  {
    id: 'sn',
    header: 'SN',
    cell: ({ row }: { row: any }) => <span>{row.index + 1}</span>,
  },
  {
    accessorKey: 'regDateISO',
    header: 'Reg Date',
  },
  {
    accessorKey: 'patientName',
    header: 'Name',
    cell: ({ row }: { row: any }) => {
      const { patientName, patientAvatarUrl } = row.original;
      return (
        <div className="flex items-center gap-3">
          <img
            src={patientAvatarUrl}
            alt={patientName}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">{patientName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    cell: ({ row }: { row: any }) => (
      <span className="capitalize">{row.original.gender}</span>
    ),
  },
  {
    id: 'viewDetails',
    header: 'View Details',
    cell: ({ row }: { row: any }) => {
      const { id, patientName } = row.original;
      return (
        <CustomButton
          size={'sm'}
          onClick={() => onViewDetails && onViewDetails(id)}
        >
          View
        </CustomButton>
      );
    },
  },
];
