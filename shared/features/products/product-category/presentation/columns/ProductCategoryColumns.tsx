import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { TableRowProductCategoryDto } from '../../domain/productCategory.dto';
import ProductCategoryActionButtons from '../components/ProductCategoryActions';
import ProductCategoryImageUpload from '../components/ProductCategoryImageUpload';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const ProductCategoryColumns = (
  handleEdit: (schedule: TableRowProductCategoryDto) => void
): ColumnDef<TableRowProductCategoryDto>[] => [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => <ProductCategoryImageUpload data={row.original} />,
  },
  {
    accessorKey: 'name',
    header: 'Category',
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
    accessorKey: 'categoryName',
    header: 'Parent Category',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        className={
          row.original.isActive
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-gray-100 text-gray-600 border border-gray-200'
        }
      >
        {row.original.isActive ? 'Active' : 'Inactive'}
      </Badge>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <ProductCategoryActionButtons
        data={row.original}
        handleEdit={handleEdit}
      />
    ),
  },
];
