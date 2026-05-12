'use client';

import Tablist from '@/components/custom-components/Tablist';
import IncomingRequests from './IncomingRequests';
import OutgoingRequests from './OutgoingRequests';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useOutgoingRequestHandle } from '../hooks/useOutgoingRequestHandle';
import DatalistHeader from '@/components/custom-components/data-list-header';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import OutgoingRequestForm from './OutgingRequestForm';
import { Icons } from '@/shared/icons';
import ApprovedRequests from './ApprovedRequests';

const doctorRequestsTab = [
  { title: 'Received', value: 'incoming', icon: Icons.ArrowDownLeft },
  { title: 'Sent', value: 'outgoing', icon: Icons.ArrowUpRight },
  { title: 'Approved', value: 'approved', icon: Icons.CheckCircle },
];

const DoctorRequests = () => {
  const { open, setOpen, editingHospital, handleEdit, handleAdd } =
    useOutgoingRequestHandle();

  return (
    <main>
      <DatalistHeader
        title="Doctor Requests"
        description="Track and manage incoming and outgoing doctor requests."
        handleAdd={handleAdd}
      />

      <Tabs defaultValue="incoming" className="mt-2">
        <Tablist tabData={doctorRequestsTab} />

        <TabsContent value="incoming">
          <IncomingRequests />
        </TabsContent>

        <TabsContent value="outgoing">
          <OutgoingRequests handleEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="approved">
          <ApprovedRequests />
        </TabsContent>
      </Tabs>

      {/* GLOBAL DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHospital ? 'Edit Doctor Request' : 'Doctor Request'}
            </DialogTitle>
            <DialogDescription>
              {editingHospital
                ? 'Update Doctor Request'
                : 'Enter Doctor Request'}
            </DialogDescription>
          </DialogHeader>

          <OutgoingRequestForm
            initialValues={editingHospital || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default DoctorRequests;
