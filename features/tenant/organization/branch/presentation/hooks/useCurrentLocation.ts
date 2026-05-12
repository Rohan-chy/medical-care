import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { BranchFormValues } from '../../domain/branch.schema';

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

export const useCurrentLocation = (form: UseFormReturn<BranchFormValues>) => {
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = (): Promise<LocationData> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert('Geolocation not supported');
        reject('Geolocation not supported');
        return;
      }

      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          form.setValue('latitude', lat);
          form.setValue('longitude', lng);

          const geocoder = new google.maps.Geocoder();

          geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            setLoading(false);

            if (status === 'OK' && results?.[0]) {
              const result = results[0];

              const address = result.formatted_address;

              const city = result.address_components?.find((c) =>
                c.types.includes('locality')
              )?.long_name;

              const state = result.address_components?.find((c) =>
                c.types.includes('administrative_area_level_1')
              )?.long_name;

              const country = result.address_components?.find((c) =>
                c.types.includes('country')
              )?.long_name;

              const locationData: LocationData = {
                lat,
                lng,
                address,
                city,
                state,
                country,
              };

              form.setValue(
                'location',
                address ||
                  `${city || ''} ${state || ''} ${country || ''}`.trim()
              );

              resolve(locationData);
            } else {
              const fallback: LocationData = { lat, lng };
              resolve(fallback);
            }
          });
        },
        (err) => {
          setLoading(false);
          console.warn(err);
          alert('Unable to fetch current location');
          reject(err);
        }
      );
    });
  };

  return {
    getCurrentLocation,
    loading,
  };
};
