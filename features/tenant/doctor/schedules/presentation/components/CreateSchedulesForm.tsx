'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import { useDoctorScheduleSubmit } from '../hooks/useSchedulesSubmit';
import { optionsConverter } from '@/lib/optionsConverter';
import { useGetDoctorProfile } from '../../../profile/application/usecases/useGetDoctorProfile';
import { useGetMyHospitalClinicByDoctorId } from '../../../hospitals/my-hospitals/application/useGetMyHospitalClinicByDoctorId';
import { groupBranch } from '../../application/utils/groupBranch';
import { useDoctorScheduleForm } from '../../domain/form/doctorSchedule.form';
import { DoctorScheduleResponseItemDto } from '../../domain/doctorSchedule.dto';

interface DoctorScheduleFormProps {
  initialValues?: DoctorScheduleResponseItemDto;
  onClose?: () => void;
}

export default function CreateDoctorScheduleForm({
  initialValues,
  onClose,
}: DoctorScheduleFormProps) {
  const form = useDoctorScheduleForm(initialValues);
  const { watch } = form;

  const { data: doctorProfile } = useGetDoctorProfile();

  const { data: myHospitals } = useGetMyHospitalClinicByDoctorId(
    doctorProfile?.id ?? ''
  );
  const hospitalData = myHospitals?.clinicAndBranch;

  const clinicId = watch('clinicId');

  const { branchData, groupedClinics } = groupBranch(hospitalData, clinicId);

  const { submitDoctorSchedule, loading } = useDoctorScheduleSubmit({
    onSuccess: onClose,
  });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitDoctorSchedule)}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 space-y-6">
            <Combobox
              form={form}
              items={optionsConverter(
                groupedClinics,
                (d) => d.clinicName,
                (d) => d.clinicId
              )}
              name="clinicId"
              labelField="clinicName"
              label="Clinic Name"
            />

            <Combobox
              items={optionsConverter(
                branchData,
                (d: any) => d.branchName,
                (d: any) => d.branchId
              )}
              form={form}
              name="branchId"
              label="Branch Name"
              isRequired
            />

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
              onClick={() => form.reset()}
            >
              Clear
            </CustomButton>
          </div>
        </form>
      </Form>
    </>
  );
}
