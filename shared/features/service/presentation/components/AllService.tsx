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
import { serviceColumns } from '../columns/serviceColumns';
import AddServiceForm from './AddServiceForm';
import { useAllServiceHandler } from '../hooks/useAllServiceHandler';

const AllService = () => {
  const { open, setOpen, editingService, handleEdit, handleAdd, ServiceData } =
    useAllServiceHandler();

  return (
    <>
      <DatalistHeader
        title="Services"
        description="Manage the services offered by the clinic. Add, update, or remove services to keep offerings accurate and up to date."
        handleAdd={handleAdd}
      />

      <DataTable
        columns={serviceColumns(handleEdit)}
        data={ServiceData || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingService ? 'Edit Service' : 'Service'}
            </DialogTitle>
            <DialogDescription>
              {editingService
                ? 'Update Service details'
                : 'Enter Service details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <AddServiceForm
            initialValues={editingService || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllService;
