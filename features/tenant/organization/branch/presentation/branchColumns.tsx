import { ColumnDef } from '@tanstack/react-table';
import BranchActions from './components/BranchActions';
import { TableRowModel } from '../domain/branch.dto';
import { BranchTimingForm } from '../../timing/presentation/components/BranchTimingForm';
import BranchGallery from '../../branch-gallery/presentation/components/BranchGalleryForm';

export const branchColumns = (
  handleEdit: (clinic: TableRowModel) => void
): ColumnDef<TableRowModel>[] => [
  {
    accessorKey: 'name',
    header: 'Branch',
  },
  {
    accessorKey: 'location',
    header: 'Address',
  },
  {
    accessorKey: 'contactNo',
    header: 'Contact',
  },
  {
    accessorKey: 'file',
    header: 'File',
    cell: ({ row }) => <BranchGallery data={row.original} />,
  },
  {
    accessorKey: 'timing',
    header: 'Timing',
    cell: ({ row }) => <BranchTimingForm selectedHospital={row.original} />,
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <BranchActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
