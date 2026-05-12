'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useGetCountry } from '@/shared/features/address/country/application/usecases/useGetCountry';
import { addressOptions } from '@/shared/optionsData/addressOptions';
import { useGetStateByCountryId } from '@/shared/features/address/state/application/usecases/useGetStateByCountryId';
import { useGetDistrictByStateId } from '@/shared/features/address/district/application/usecases/useGetDistrictByStateId';
import { useGetMunicipalityByDistrictId } from '@/shared/features/address/municipal/application/usecases/useGetMunicipalityByDistrictId';
import { useEffect, useMemo, useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { FormInput } from '@/components/custom-components/form-input';
import { Combobox2 } from '@/components/custom-components/combobox2';
import { useGetWardByMunicipalityId } from '@/shared/features/address/ward/application/usecases/useGetWardByMunicipalityId';

type AddressInfoProps = {
  mode: 'edit' | 'view';
  form: any;
};

const AddressInfo = ({ mode, form }: AddressInfoProps) => {
  const isReadOnly = mode !== 'edit';
  // dependent (cascading) select system:
  // Country → State → District → Municipality
  const { data: countries } = useGetCountry();

  // const countryId = form.watch('countryId');
  // const stateId = form.watch('stateId');
  // const districtId = form.watch('districtId');
  const countryId = useWatch({
    control: form.control,
    name: 'countryId',
  });

  const stateId = useWatch({
    control: form.control,
    name: 'stateId',
  });

  const districtId = useWatch({
    control: form.control,
    name: 'districtId',
  });

  const municipalityId = useWatch({
    control: form.control,
    name: 'municipalityId',
  });

  // const { data: states } = useGetStateByCountryId(countryId);
  // const { data: districts } = useGetDistrictByStateId(stateId);
  // const { data: municipalities } = useGetMunicipalityByDistrictId(districtId);
  // Only call hooks when IDs have values
  const { data: states } = useGetStateByCountryId(countryId || '');
  const { data: districts } = useGetDistrictByStateId(stateId || '');
  const { data: municipalities } = useGetMunicipalityByDistrictId(
    districtId || ''
  );
  const { data: wards, isPending } = useGetWardByMunicipalityId(
    municipalityId || ''
  );
  console.log(wards);

  const wardOptions = useMemo(() => {
    if (isPending || !wards?.data?.length) {
      return [{ label: 'Select', value: '' }];
    }

    const count = wards.data[0].wardNumber;

    return [
      { label: 'Select', value: '' },
      ...Array.from({ length: count }, (_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`,
      })),
    ];
  }, [wards, isPending]);

  // Tracking previous values to avoid clearing on initial render
  const prevCountryId = useRef<string | undefined>(undefined);
  const prevStateId = useRef<string | undefined>(undefined);
  const prevDistrictId = useRef<string | undefined>(undefined);

  useEffect(() => {
    // Clearing only if countryId actually changed (not on initial render)
    if (
      prevCountryId.current !== undefined &&
      prevCountryId.current !== countryId
    ) {
      form.setValue('stateId', '');
      form.setValue('districtId', '');
      form.setValue('municipalityId', '');
    }
    prevCountryId.current = countryId;
  }, [countryId, form]);

  useEffect(() => {
    // Clearing Only if stateId actually changed (not on initial render)
    if (prevStateId.current !== undefined && prevStateId.current !== stateId) {
      form.setValue('districtId', '');
      form.setValue('municipalityId', '');
    }
    prevStateId.current = stateId;
  }, [stateId, form]);

  useEffect(() => {
    // Clearing Only if districtId actually changed (not on initial render)
    if (
      prevDistrictId.current !== undefined &&
      prevDistrictId.current !== districtId
    ) {
      form.setValue('municipalityId', '');
    }
    prevDistrictId.current = districtId;
  }, [districtId, form]);

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Address Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Country */}
          <Combobox2
            form={form}
            name="countryId"
            label="Country"
            items={addressOptions(countries?.data) || []}
            disabled={isReadOnly}
          />

          {/* State */}
          <Combobox2
            form={form}
            name="stateId"
            label="State / Province"
            items={addressOptions(states?.data) || []}
            disabled={isReadOnly || !countryId}
          />

          {/* District */}
          <Combobox2
            form={form}
            name="districtId"
            label="District"
            items={addressOptions(districts?.data) || []}
            disabled={isReadOnly || !stateId}
          />

          {/* Municipal */}
          <Combobox2
            form={form}
            name="municipalityId"
            label="Municipality"
            items={addressOptions(municipalities?.data) || []}
            disabled={isReadOnly || !districtId}
          />

          {/* Ward No */}
          <Combobox2
            form={form}
            name="wardNumber"
            label="Ward No"
            items={wardOptions || []}
            disabled={isReadOnly || !municipalityId}
          />
          {/* <FormInput
            form={form}
            name="wardNumber"
            label="Ward No"
            type="number"
            disabled={isReadOnly}
          /> */}

          {/* Address Line */}
          <FormInput
            form={form}
            name="addressLine"
            label="Address Line"
            disabled={isReadOnly}
          />

          {/* Pin Code */}
          <FormInput
            form={form}
            name="pinCode"
            label="PIN Code"
            disabled={isReadOnly}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressInfo;
