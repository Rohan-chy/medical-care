import { useEffect, useRef } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';
import { DoctorRegistrationAdditionalFormValues } from '@/features/auth/doctor-with-additionalInfo/domain/registerDoctorAdditionalInfo.schema';
// import { DoctorRegistrationAdditionalFormValues } from '../../domain/registerOrganizationAdditionalInfo.schema';

type DoctorRegistrationAdditionalFormValuesWithDob =
  DoctorRegistrationAdditionalFormValues & {
    dateOfBirth?: string;
    dateOfBirthNp?: string;
  };

export function useDateConverter(
  watch: UseFormWatch<DoctorRegistrationAdditionalFormValuesWithDob>,
  setValue: UseFormSetValue<DoctorRegistrationAdditionalFormValuesWithDob>
) {
  const dobAd = watch('dateOfBirth');
  const dobBs = watch('dateOfBirthNp');

  const updating = useRef<'ad' | 'bs' | null>(null);

  // Sync AD → BS
  useEffect(() => {
    if (!dobAd || updating.current === 'bs') return;

    // ✅ Ensure correct format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dobAd)) return;

    updating.current = 'ad';
    const bs = adToBs(dobAd);
    setValue('dateOfBirthNp', bs, { shouldValidate: true });
    updating.current = null;
  }, [dobAd, setValue]);

  // Sync BS → AD
  useEffect(() => {
    if (!dobBs || updating.current === 'ad') return;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dobBs)) return;

    updating.current = 'bs';
    const ad = bsToAd(dobBs);
    setValue('dateOfBirth', ad, { shouldValidate: true });
    updating.current = null;
  }, [dobBs, setValue]);
}
