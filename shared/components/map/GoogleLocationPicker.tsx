'use client';

import { SpinnerCustom } from '@/components/custom-components/SpinnerCustom';
import { useDebounce } from '@/utils/useDebounce';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';

const libraries: 'places'[] = ['places'];

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

type Props = {
  initialPosition: { lat: number; lng: number };
  onSelect: (data: LocationData) => void;
  canEdit?: boolean;
};

const GOOGLE_MAPS_API_KEY = 'AIzaSyBO8W4ATSBGKGavMQQ82rMPuJCSYAI93qU';

export default function GoogleLocationPicker({
  initialPosition,
  onSelect,
  canEdit = true,
}: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  // INPUT + DEBOUNCE
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const marker = initialPosition;

  const searchRef = useRef<HTMLInputElement | null>(null);

  // -----------------------------
  // SEARCH (debounced)
  // -----------------------------
  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      {
        input: debouncedQuery,
        componentRestrictions: { country: 'np' },
        types: ['geocode'],
      },
      (predictions, status) => {
        setLoading(false);

        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          !predictions
        ) {
          setSuggestions([]);
          return;
        }

        setSuggestions(predictions);
      }
    );
  }, [debouncedQuery]);

  if (!isLoaded) return <SpinnerCustom />;

  // SELECT PLACE
  const selectPlace = (placeId: string) => {
    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    );

    service.getDetails(
      {
        placeId,
        fields: ['geometry', 'formatted_address', 'address_components'],
      },
      (place: any, status: any) => {
        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          !place?.geometry
        )
          return;

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        const data: LocationData = {
          lat,
          lng,
          address: place.formatted_address,
          city: place.address_components?.find((c: any) =>
            c.types.includes('locality')
          )?.long_name,
          state: place.address_components?.find((c: any) =>
            c.types.includes('administrative_area_level_1')
          )?.long_name,
          country: place.address_components?.find((c: any) =>
            c.types.includes('country')
          )?.long_name,
        };

        onSelect(data);
        setSuggestions([]);
        setQuery('');
        map?.panTo({ lat, lng });
      }
    );
  };

  // MAP CLICK
  const getAddressFromLatLng = (lat: number, lng: number) => {
    return new Promise<LocationData>((resolve) => {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results?.[0]) {
          const r = results[0];

          resolve({
            lat,
            lng,
            address: r.formatted_address,
            city: r.address_components?.find((c) =>
              c.types.includes('locality')
            )?.long_name,
            state: r.address_components?.find((c) =>
              c.types.includes('administrative_area_level_1')
            )?.long_name,
            country: r.address_components?.find((c) =>
              c.types.includes('country')
            )?.long_name,
          });
        } else {
          resolve({ lat, lng });
        }
      });
    });
  };

  return (
    <div className="space-y-2">
      {/* SEARCH INPUT */}
      {canEdit && (
        <div className="relative">
          <input
            ref={searchRef}
            className="w-full p-2 border rounded"
            placeholder="Search location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* LOADING */}
          {loading && (
            <div className="text-xs text-gray-500 p-2">Searching...</div>
          )}

          {/* SUGGESTIONS */}
          {suggestions.length > 0 && (
            <div className="absolute z-50 w-full bg-white border rounded shadow max-h-60 overflow-auto">
              {suggestions.map((item) => (
                <div
                  key={item.place_id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectPlace(item.place_id)}
                >
                  {item.description}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MAP */}
      <GoogleMap
        center={marker}
        zoom={15}
        mapContainerStyle={{ height: '400px', width: '100%' }}
        onLoad={(mapInstance: any) => setMap(mapInstance)}
        onClick={async (e: any) => {
          if (!e.latLng) return;

          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          const data = await getAddressFromLatLng(lat, lng);
          onSelect(data);
          map?.panTo({ lat, lng });
        }}
      >
        <Marker
          position={marker}
          draggable
          onDragEnd={async (e: any) => {
            if (!e.latLng) return;

            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            const data = await getAddressFromLatLng(lat, lng);
            onSelect(data);
          }}
        />
      </GoogleMap>
    </div>
  );
}
