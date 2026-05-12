'use client';
import React from 'react';
import { useAddBranchTiming } from '../../application/usecases/useAddBranchTiming';
import { useUpdateBranchTiming } from '../../application/usecases/useUpdateBranchTiming';
import { useDeleteBranchTiming } from '../../application/usecases/useDeleteBranchTiming';
import {
  BranchTimingFormValues,
  creatBranchTimingschema,
  updateBranchTimingSchema,
} from '../../domain/branchTiming.schema';
import { useGetBranchTimingByBranchId } from '../../application/usecases/useGetBranchTimingByBranchId';

export const useBranchTimingFormHandler = (selectedHospital: any) => {
  const [open, setOpen] = React.useState(false);

  const { data: branchTiming } = useGetBranchTimingByBranchId(
    selectedHospital?.id ?? '',
    open
  );
  const branchTimingData = branchTiming?.data;

  const { mutateAsync: addBranchSchedule, isPending: creating } =
    useAddBranchTiming();
  const { mutateAsync: updateBranchSchedule, isPending: updating } =
    useUpdateBranchTiming();
  const { mutateAsync: deleteSchedule, isPending: deleting } =
    useDeleteBranchTiming();

  const onSubmit = async (values: BranchTimingFormValues) => {
    try {
      const hasExisting = values.data.some((item) => item.id);

      if (hasExisting) {
        const parsed = creatBranchTimingschema.parse(values);
        await updateBranchSchedule(parsed);
      } else {
        const parsed = creatBranchTimingschema.parse(values);
        await addBranchSchedule(parsed);
      }

      setOpen(false);
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  const removeScheduleFromBackend = async (id: string) => {
    if (!id) return;
    try {
      await deleteSchedule({ id });
    } catch (error) {
      console.error('Delete schedule failed:', error);
    }
  };

  return {
    open,
    setOpen,
    onSubmit,
    removeScheduleFromBackend,
    loading: creating || updating || deleting,
    branchTimingData,
  };
};
