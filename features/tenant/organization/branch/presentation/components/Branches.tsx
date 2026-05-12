'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { useState } from 'react';
import { Icons } from '@/shared/icons';
import { useAllBranchHandler } from '../hooks/useAllBranchHandler';
import GoogleLocationPicker from '@/shared/components/map/GoogleLocationPicker';
import BranchActions from './BranchActions';
import { BranchItemDto } from '../../domain/branch.dto';
import { BranchTimingForm } from '../../../timing/presentation/components/BranchTimingForm';

interface props {
  handleEdit: (data: BranchItemDto) => void;
}

const MyBranches = ({ handleEdit }: props) => {
  const { BranchData } = useAllBranchHandler();

  const [open, setOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);

  const handleOpenDialog = (hospital: any) => {
    setSelectedHospital(hospital);
    setOpen(true);
  };

  return (
    <main>
      {BranchData?.length === 0 ? (
        <div className="text-center text-gray-500 border rounded-lg p-6 mt-6">
          <p className="text-lg font-medium">No BranchData found</p>
          <p className="text-sm mt-1">
            You are not associated with any BranchData yet.
          </p>
        </div>
      ) : (
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BranchData?.map((hospital: any, i: number) => (
            <div
              key={i}
              className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white relative"
            >
              {/* Status Badge */}
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold">
                <BranchActions data={hospital} handleEdit={handleEdit} />
              </span>

              {/* Header */}
              <div className="bg-primary text-primary-foreground px-5 py-3 rounded-t-xl">
                <h2 className="text-xl font-semibold">{hospital.name}</h2>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <Icons.Location size={16} /> {hospital.location}
                </p>
              </div>

              {/* Body */}
              <div className="p-5 text-gray-700 text-sm space-y-3">
                {hospital.latitude && hospital.longitude ? (
                  <div className="max-w-xl h-40 sm:h-48 md:h-60 rounded-xl overflow-hidden border">
                    <GoogleLocationPicker
                      initialPosition={{
                        lat: hospital.latitude,
                        lng: hospital.longitude,
                      }}
                      onSelect={(hospital: any) => {
                        console.log(hospital); // leave empty
                      }}
                      canEdit={false}
                    />
                  </div>
                ) : null}
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
                    Manage Branch
                  </Button>
                </Link>

                <Button
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => handleOpenDialog(hospital)}
                >
                  <Icons.Plus size={16} />
                  Add Timing
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyBranches;
