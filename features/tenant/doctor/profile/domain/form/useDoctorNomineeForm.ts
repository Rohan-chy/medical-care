import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorNomineeFormValues,
  DoctorNomineeFormSchema,
} from '../schema/doctorNominee.schema';
import { emptyNominee } from '../doctorFormDefaults';
import { DEFAULT_UUID } from '@/shared/constants/defaultValues';

export const useDoctorNomineeForm = (verifyDoctorData?: any) => {
  const form = useForm<DoctorNomineeFormValues>({
    // resolver: zodResolver(DoctorNomineeFormSchema),
    defaultValues: {
      doctorNominees: [emptyNominee],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorNominees:
        verifyDoctorData?.doctorNominees?.length > 0
          ? verifyDoctorData.doctorNominees.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              name: item?.name ?? '',
              relationship: item?.relationship ?? '',
              contactNumber: item?.contactNumber ?? '',
            }))
          : [emptyNominee],
    });
  }, [verifyDoctorData, form]);

  return form;
};
