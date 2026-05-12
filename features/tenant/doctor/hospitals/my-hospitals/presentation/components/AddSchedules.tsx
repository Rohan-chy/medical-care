'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { useAddScheduleHandle } from '../hooks/useAddScheduleHandle';
import { useAddScheduleForm } from '../../domain/schedule.form';

const CreateScheduleForm = ({ hospital, onClose }: any) => {
  const form = useAddScheduleForm(hospital);

  // const { data: doctorProfile } = useGetDoctorProfile();

  // const { data: myHospitals } = useGetMyHospitalClinicByDoctorId(
  //   doctorProfile?.id ?? ''
  // );

  // const hospitalData = myHospitals?.clinicAndBranch;

  // const { branchData } = groupBranch(hospitalData, hospital?.id);

  const { onSubmit, loading } = useAddScheduleHandle(onClose);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-6">
          {/* Date */}
          <FloatingLabelFormInput
            form={form}
            name="scheduleDate"
            label="Schedule Date"
            type="date"
            isRequired
          />

          {/* From */}
          <FloatingLabelFormInput
            form={form}
            name="scheduleTimeFrom"
            label="From Time"
            type="time"
            isRequired
          />

          {/* To */}
          <FloatingLabelFormInput
            form={form}
            name="scheduleTimeTo"
            label="To Time"
            type="time"
            isRequired
          />

          {/* Max Patients */}
          <FloatingLabelFormInput
            form={form}
            name="maxPatientCap"
            label="Max Patients"
            type="number"
            isRequired
          />

          {/* Fee */}
          <FloatingLabelFormInput
            form={form}
            name="quotedFee"
            label="Consultation Fee"
            type="number"
            isRequired
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <CustomButton
            type="submit"
            size="sm"
            disabled={!form.formState.isValid || loading}
          >
            Save Schedule
          </CustomButton>

          <CustomButton
            type="button"
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            Cancel
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateScheduleForm;
