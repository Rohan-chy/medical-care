import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  ApproveRejectFormValues,
  approveRejectSchema,
} from '../schema/scheduleApproveReject.schema';

export const useApproveRejectScheduleForm = (initialValues?: any) => {
  const form = useForm<ApproveRejectFormValues>({
    resolver: zodResolver(approveRejectSchema),
    defaultValues: {
      doctorClinicAllocationId: '',
      cancellationReason: '',
      isApproved: false,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues?.id) {
      form.setValue('doctorClinicAllocationId', initialValues.id);
      form.setValue('cancellationReason', initialValues.cancellationReason);
    }
  }, [initialValues, form]);

  return form;
};
