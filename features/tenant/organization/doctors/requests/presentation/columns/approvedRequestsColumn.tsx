import { ColumnDef } from '@tanstack/react-table';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const approvedRequestsColumns =
  (): ColumnDef<DoctorHospitalRequestResponse>[] => [
    {
      accessorKey: 'doctorName',
      header: 'Doctor',
    },
    {
      accessorKey: 'branchName',
      header: 'Branch',
    },
    {
      accessorKey: 'joiningDate',
      header: 'Joining Date',
      cell: ({ row }) => {
        const date = new Date(row.original.joiningDate);
        return isNaN(date.getTime())
          ? 'Invalid Date'
          : date.toLocaleDateString();
      },
    },
    {
      accessorKey: 'designation',
      header: 'Designation',
    },
    {
      accessorKey: 'remarks',
      header: 'Remarks',
      cell: ({ row }) => {
        const description = row.original.remarks || '—';

        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="max-w-[250px] truncate cursor-help text-sm text-gray-600">
                {description}
              </p>
            </TooltipTrigger>

            <TooltipContent className="max-w-xs break-words">
              {description}
            </TooltipContent>
          </Tooltip>
        );
      },
    },
  ];
