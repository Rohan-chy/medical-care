'use client';

import DatalistHeader from '@/components/custom-components/data-list-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useGetMyHospitals } from '../../application/useGetMyHospitals';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateScheduleForm from './AddSchedules';
import { Icons } from '@/shared/icons';

const MyHospitals = () => {
  const { data: hospitals } = useGetMyHospitals();

  const [open, setOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);

  const handleOpenDialog = (hospital: any) => {
    setSelectedHospital(hospital);
    setOpen(true);
  };

  return (
    <main>
      <DatalistHeader
        title="My Hospitals/Clinics"
        description="View and manage the hospitals you are associated with, including your role and details."
      />

      {hospitals?.length === 0 ? (
        <div className="text-center text-gray-500 border rounded-lg p-6 mt-6">
          <p className="text-lg font-medium">No hospitals found</p>
          <p className="text-sm mt-1">
            You are not associated with any hospitals yet.
          </p>
        </div>
      ) : (
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals?.map((hospital: any, i: number) => (
            <div
              key={i}
              className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white relative"
            >
              {/* Status Badge */}
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold bg-green-600">
                Active
              </span>

              {/* Header */}
              <div className="bg-primary text-primary-foreground px-5 py-3 rounded-t-xl">
                <h2 className="text-xl font-semibold">{hospital.branchName}</h2>
                {/* <p className="text-sm opacity-90 flex items-center gap-1">
                  <Icons.Location size={16} /> {hospital.location}
                </p> */}
              </div>

              {/* Body */}
              <div className="p-5 text-gray-700 text-sm space-y-3">
                {/* <div className="flex justify-between items-center">
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Stethoscope size={16} />
                    <span>Type</span>
                  </div>
                  <span className="font-medium text-right">
                    {hospital.type}
                  </span>
                </div> */}

                <div className="flex justify-between items-center">
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Icons.User size={16} />
                    <span>Designation</span>
                  </div>
                  <span className="font-medium text-right">
                    {hospital.designation}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Icons.Calendar size={16} />
                    <span>Joining Date</span>
                  </div>
                  <span className="font-medium text-right">
                    {new Date(hospital.joiningDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Icons.User size={16} />
                    <span>Manager</span>
                  </div>
                  <span className="font-medium text-right">
                    {hospital.manager}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Icons.Phone size={16} />
                    <span>Contact</span>
                  </div>
                  <span className="font-medium text-right">
                    {hospital.contactNo}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="px-5 pb-5 pt-2 flex gap-3">
                <Link
                  href={{
                    pathname: `/doctor/hospitals/${hospital.id}/schedules`,
                    query: { name: hospital.name },
                  }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Icons.Settings size={16} />
                    Manage Slots
                  </Button>
                </Link>

                <Button
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => handleOpenDialog(hospital)}
                >
                  <Icons.Plus size={16} />
                  Create Slots
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add schedule form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              Add Schedule - {selectedHospital?.branchName}
            </DialogTitle>
          </DialogHeader>

          <CreateScheduleForm
            hospital={selectedHospital}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default MyHospitals;
