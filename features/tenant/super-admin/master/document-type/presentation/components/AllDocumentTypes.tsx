//rohan
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
import { documentTypeColumns } from '../columns/documentTypeColumns';
import CreateDocumentTypeForm from './CreateDocumentTypeForm';
import { useAllDocumentTypeHandler } from '../hooks/useAllDocumentTypeHandler';

const AllDocumentTypes = () => {
  const {
    DocumentTypes,
    open,
    setOpen,
    editingDocumentType,
    handleEdit,
    handleAdd,
  } = useAllDocumentTypeHandler();

  return (
    <>
      <DatalistHeader title="Document" handleAdd={handleAdd} />

      <DataTable
        columns={documentTypeColumns(handleEdit)}
        data={DocumentTypes}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingDocumentType ? 'Edit Document' : 'Document'}
            </DialogTitle>
            <DialogDescription>
              {editingDocumentType
                ? 'Update Document details'
                : 'Enter Document details '}
            </DialogDescription>
          </DialogHeader>

          <CreateDocumentTypeForm
            initialValues={editingDocumentType}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDocumentTypes;
