'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DatalistHeader from '@/components/custom-components/data-list-header';
import BranchForm from './BranchForm';
import { useAllBranchHandler } from '../hooks/useAllBranchHandler';
import { branchColumns } from '../branchColumns';
import { mapDtoToTable } from '../../application/mapper/mapDtoToTable';
import MyBranches from './Branches';

const AllBranches = () => {
  const { open, setOpen, editingBranch, handleEdit, handleAdd, BranchData } =
    useAllBranchHandler();

  return (
    <>
      <DatalistHeader
        title="Hospitals/Clinics Branch"
        description="View, track, and manage branch information and activities"
        handleAdd={handleAdd}
      />

      {/* <MyBranches handleEdit={handleEdit}/> */}

      <DataTable
        columns={branchColumns(handleEdit)}
        data={BranchData?.map(mapDtoToTable) || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingBranch ? 'Edit Branch' : 'Create Branch'}
            </DialogTitle>
            <DialogDescription>
              {editingBranch
                ? 'Update Branch details'
                : 'Enter Branch details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <BranchForm
            initialValues={editingBranch ?? undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllBranches;
