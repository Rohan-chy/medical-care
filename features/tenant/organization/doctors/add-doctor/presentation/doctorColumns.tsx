import { ColumnDef } from '@tanstack/react-table';
import { ResponseAddDoctorItemDto } from '../domain/addDoctor.dto';
import { genderText } from '@/shared/optionsData/statusOptions';
import DoctorActions from './components/DoctorActions';
import { DoctorTableRowModel } from '../domain/doctorTableRow.model';

export const doctorColumns = (
  handleEdit: (user: DoctorTableRowModel) => void
): ColumnDef<DoctorTableRowModel>[] => [
  {
    accessorKey: 'fullName',
    header: 'Name',
  },
  {
    accessorKey: 'genderLabel',
    header: 'Gender',
  },
  {
    accessorKey: 'contact',
    header: 'Contact',
  },

  {
    accessorKey: 'email',
    header: 'Email',
  },

  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <DoctorActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
