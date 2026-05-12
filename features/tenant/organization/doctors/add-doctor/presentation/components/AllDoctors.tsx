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
import AddDoctorForm from './AddDoctorForm';
import { useAllDoctorHandler } from '../hooks/useAllDoctorHandler';
import { doctorColumns } from '../doctorColumns';
import UpdateDoctorForm from './UpdateDoctorForm';

const AllDoctors = () => {
  const { open, setOpen, editingDoctor, handleEdit, handleAdd, DoctorData } =
    useAllDoctorHandler();

  return (
    <>
      <DatalistHeader
        title="Doctor"
        description="View, track, and manage Doctor information and activities"
        handleAdd={handleAdd}
      />

      <DataTable columns={doctorColumns(handleEdit)} data={DoctorData || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingDoctor ? 'Edit Doctor' : 'Create Doctor'}
            </DialogTitle>
            <DialogDescription>
              {editingDoctor
                ? 'Update the doctor’s details below.'
                : 'Fill in the details below to create a new doctor account.'}
            </DialogDescription>
          </DialogHeader>
          {editingDoctor ? (
            <UpdateDoctorForm
              initialValues={editingDoctor ?? undefined}
              onClose={() => setOpen(false)}
            />
          ) : (
            <AddDoctorForm onClose={() => setOpen(false)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDoctors;
