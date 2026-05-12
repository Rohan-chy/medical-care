import { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import dynamic from 'next/dynamic';
import { useBranchForm } from '../../domain/useBranchForm';
import { useBranchFormHandler } from '../hooks/useBranchFormHandler';
import { TableRowModel } from '../../domain/branch.dto';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

interface CreateClinicFormProps {
  initialValues?: TableRowModel;
  onClose?: () => void;
}

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

const LocationPicker = dynamic(
  () => import('@/shared/components/map/GoogleLocationPicker'),
  { ssr: false }
);

const BranchForm = ({ initialValues, onClose }: CreateClinicFormProps) => {
  const form = useBranchForm(initialValues);
  const { onSubmit, loading } = useBranchFormHandler({ onClose });
  const { getCurrentLocation, loading: currentLocationloading } =
    useCurrentLocation(form);

  const lat = form.watch('latitude');
  const lng = form.watch('longitude');

  const [mapOpen, setMapOpen] = useState(false);

  const [deviceLocation, setDeviceLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [selectedPosition, setSelectedPosition] = useState<LocationData>({
    lat: form.getValues('latitude') ?? 27.7172,
    lng: form.getValues('longitude') ?? 85.324,
  });

  useEffect(() => {
    const lat = form.getValues('latitude');
    const lng = form.getValues('longitude');

    // If editing existing data → do nothing
    if (lat && lng) return;

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        setDeviceLocation(coords);

        // optional: prefill form
        form.setValue('latitude', coords.lat);
        form.setValue('longitude', coords.lng);
      },
      () => {
        console.log('Location permission denied');
      }
    );
  }, []);

  const mapPosition =
    lat && lng ? { lat, lng } : deviceLocation || { lat: 27.7172, lng: 85.324 };

  const openMap = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      setMapOpen(true);
      return;
    }

    try {
      const permission = await navigator.permissions.query({
        name: 'geolocation',
      });
      if (permission.state === 'granted' || permission.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            };
            setSelectedPosition(coords);
            setMapOpen(true);
          },
          () => setMapOpen(true)
        );
      } else {
        alert('Location permission denied. Enable in browser settings.');
        setMapOpen(true);
      }
    } catch {
      setMapOpen(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FloatingLabelFormInput form={form} name="name" label="Name" />
            <FloatingLabelFormInput
              form={form}
              name="location"
              label="Location"
            />
            <FloatingLabelFormInput
              form={form}
              name="contactNo"
              label="Contact Number"
            />

            <CustomButton type="button" onClick={openMap}>
              Pick Location from Map
            </CustomButton>
            {/* {form.watch('latitude') && form.watch('longitude') && (
              <p className="text-sm mt-2">
                📍 {form.watch('latitude')}, {form.watch('longitude')}
              </p>
            )} */}

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                size={'sm'}
                disabled={!form.formState.isValid || loading}
              >
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>
              <CustomButton
                type="button"
                variant={'outline'}
                size={'sm'}
                disabled={loading}
                onClick={() => form.reset(initialValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>

      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="w-screen max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select Location</DialogTitle>
          </DialogHeader>

          <LocationPicker
            initialPosition={mapPosition}
            onSelect={(data) => {
              setSelectedPosition(data);

              form.setValue('latitude', data.lat);
              form.setValue('longitude', data.lng);
              form.setValue(
                'location',
                data.address ||
                  `${data.city || ''} ${data.state || ''} ${data.country || ''}`.trim()
              );
            }}
          />

          <DialogFooter className="flex justify-end gap-2">
            <CustomButton
              type="button"
              size="sm"
              variant="outline"
              onClick={async () => {
                const data = await getCurrentLocation();
                setSelectedPosition(data);
                setMapOpen(false);
              }}
              disabled={loading}
            >
              {currentLocationloading
                ? 'Fetching...'
                : '📍 Use my current location'}
            </CustomButton>

            <CustomButton
              disabled={!selectedPosition}
              onClick={() => {
                if (selectedPosition) {
                  form.setValue('latitude', selectedPosition.lat);
                  form.setValue('longitude', selectedPosition.lng);
                  form.setValue(
                    'location',
                    selectedPosition.address ||
                      `${selectedPosition.city || ''} ${selectedPosition.state || ''} ${selectedPosition.country || ''}`.trim()
                  );
                }
                setMapOpen(false);
              }}
              size={'sm'}
            >
              Confirm
            </CustomButton>

            <CustomButton
              variant="outline"
              size={'sm'}
              onClick={() => setMapOpen(false)}
            >
              Cancel
            </CustomButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BranchForm;
