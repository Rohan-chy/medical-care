import { useApproveRejectSchedule } from '../../application/usecases/useApproveRejectSchedule';
import { useCreateDoctorSchedule } from '../../application/usecases/useCreateSchedules';
import { useUpdateDoctorSchedule } from '../../application/usecases/useUpdateSchedules';
import {
  createDoctorScheduleSchema,
  DoctorScheduleFormData,
  updateDoctorScheduleSchema,
} from '../../domain/schema/doctorSchedule.schema';
import {
  ApproveRejectFormValues,
  approveRejectSchema,
} from '../../domain/schema/scheduleApproveReject.schema';

interface UseDoctorScheduleFormControllerProps {
  onSuccess?: () => void;
}

export const useDoctorScheduleSubmit = ({
  onSuccess,
}: UseDoctorScheduleFormControllerProps) => {
  //add
  const { mutate: createDoctorSchedule, isPending: createPending } =
    useCreateDoctorSchedule();

  //update
  const { mutate: updateDoctorSchedule, isPending: updatePending } =
    useUpdateDoctorSchedule();

  //approve/reject
  const { mutate: approveRejectSchedule, isPending: approveRejectPending } =
    useApproveRejectSchedule();

  const submitDoctorSchedule = (data: DoctorScheduleFormData) => {
    if (data.id) {
      // Update existing DoctorSchedule
      const parsed = updateDoctorScheduleSchema.parse(data);
      updateDoctorSchedule(parsed, { onSuccess });
    } else {
      // Create new DoctorSchedule
      const parsed = createDoctorScheduleSchema.parse(data);
      createDoctorSchedule(parsed, { onSuccess });
    }
  };

  const handleApproveReject = (values: ApproveRejectFormValues) => {
    const parsed = approveRejectSchema.parse(values);
    approveRejectSchedule(parsed, { onSuccess });
  };

  return {
    submitDoctorSchedule,
    handleApproveReject,
    loading: createPending || updatePending || approveRejectPending,
  };
};
