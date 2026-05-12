import { DoctorScheduleResponseItemDto } from '../../domain/doctorSchedule.dto';
import { DoctorScheduleFormData } from '../../domain/schema/doctorSchedule.schema';

export const mapScheduleToForm = (
  item: DoctorScheduleResponseItemDto
): Partial<DoctorScheduleFormData> => {
  return {
    id: item.id,
    clinicId: item.clinicId,
    doctorId: item.doctorId,

    branchId: item.branchId,

    scheduleDate: item.scheduleDate?.split('T')[0],

    scheduleTimeFrom: item.scheduleTimeFrom,
    scheduleTimeTo: item.scheduleTimeTo,

    maxPatientCap: item.maxPatientCap,
    quotedFee: item.quotedFee,

    isApproved: item.isApproved,
  };
};
