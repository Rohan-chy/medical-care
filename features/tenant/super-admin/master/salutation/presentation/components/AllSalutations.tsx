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
import { salutationColumns } from '../columns/salutationColumns';
import CreateSalutationForm from './CreateSalutationForm';
import { useAllSalutationHandler } from '../hooks/useAllSalutationHandler';

const AllSalutations = () => {
  const { Clinics, open, setOpen, editingClinic, handleEdit, handleAdd } =
    useAllSalutationHandler();

  return (
    <>
      <DatalistHeader
        title="Salutation"
        description="Manage and maintain salutations used for addressing individuals in the system."
        handleAdd={handleAdd}
      />

      <DataTable columns={salutationColumns(handleEdit)} data={Clinics || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingClinic ? 'Edit Salutation' : 'Salutation'}
            </DialogTitle>
            <DialogDescription>
              {editingClinic
                ? 'Update Salutation details'
                : 'Enter Salutation details '}
            </DialogDescription>
          </DialogHeader>

          <CreateSalutationForm
            initialValues={editingClinic || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllSalutations;
