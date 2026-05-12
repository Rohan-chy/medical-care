import { ColumnDef } from '@tanstack/react-table';
import {
  DoctorSubCategory,
  TableRowDto,
} from '../domain/doctorSubCategory.dto';
import SubCategoryActions from './components/SubCategoryActions';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const doctorSubCategoryColumns = (
  handleEdit: (data: TableRowDto) => void
): ColumnDef<TableRowDto>[] => [
  {
    accessorKey: 'subCategoryName',
    header: 'Sub Speciality',
  },
  {
    accessorKey: 'doctorCategoryName',
    header: 'Speciality',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.original.description || '—';

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
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <SubCategoryActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
