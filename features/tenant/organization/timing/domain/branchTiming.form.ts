'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import {
  BranchTimingFormValues,
  branchTimingSchema,
} from './branchTiming.schema';

export const useBranchTimingForm = (
  selectedHospital?: any,
  branchTimingData?: any,
  removeScheduleFromBackend?: (id: string) => Promise<void>
) => {
  const form = useForm<BranchTimingFormValues>({
    resolver: zodResolver(branchTimingSchema),
    defaultValues: {
      branchId: selectedHospital?.id,
      data: [
        {
          id: '',
          daysOfWeek: 0,
          startTime: '09:00',
          endTime: '17:00',
        },
      ],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'data',
  });

  // Populate form when branchTimingData arrive
  useEffect(() => {
    form.reset({
      branchId: selectedHospital?.id,
      data: branchTimingData?.length
        ? branchTimingData
            .sort((a: any, b: any) => a.daysOfWeek - b.daysOfWeek)
            .map((item: any) => ({
              id: item.id,
              daysOfWeek: item.daysOfWeek,
              startTime: item.startTime.slice(0, 5),
              endTime: item.endTime.slice(0, 5),
            }))
        : [
            {
              id: '',
              daysOfWeek: 0,
              startTime: '09:00',
              endTime: '17:00',
            },
          ],
    });
  }, [branchTimingData]);

  const addSchedule = () => {
    const currentData = form.getValues('data');
    const lastDay =
      currentData.length > 0
        ? currentData[currentData.length - 1].daysOfWeek
        : -1;
    const nextDay = lastDay < 6 ? lastDay + 1 : 6;

    append({ daysOfWeek: nextDay, startTime: '09:00', endTime: '17:00' });
  };

  const removeScheduleWithBackend = async (index: number) => {
    const item = form.getValues(`data.${index}`);
    if (item?.id && removeScheduleFromBackend) {
      await removeScheduleFromBackend(item.id);
    }
    remove(index);
  };

  return {
    ...form,
    fields,
    addSchedule,
    removeSchedule: removeScheduleWithBackend,
  };
};
