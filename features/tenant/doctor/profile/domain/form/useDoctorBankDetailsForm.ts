import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorBankDetailsFormSchema,
  DoctorBankDetailsFormValues,
} from '../schema/doctorBankDetails.schema';
import { emptyBank } from '../doctorFormDefaults';
import { DEFAULT_UUID } from '@/shared/constants/defaultValues';

export const useDoctorBankDetailsForm = (verifyDoctorData?: any) => {
  const form = useForm<DoctorBankDetailsFormValues>({
    resolver: zodResolver(DoctorBankDetailsFormSchema),
    defaultValues: {
      doctorBankDetails: [emptyBank],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorBankDetails:
        verifyDoctorData?.doctorBankDetails?.length > 0
          ? verifyDoctorData.doctorBankDetails.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              bankName: item?.bankName ?? '',
              accountName: item?.accountName ?? '',
              accountNumber: item?.accountNumber ?? '',
              accountType: item?.accountType ?? '',
            }))
          : [emptyBank],
    });
  }, [verifyDoctorData, form]);

  return form;
};
