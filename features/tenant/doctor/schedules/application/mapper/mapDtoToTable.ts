import {
  DoctorScheduleResponseItemDto,
  TableRowModel,
} from '../../domain/doctorSchedule.dto';

export const mapDtoToForm = (
  item: DoctorScheduleResponseItemDto
): Partial<TableRowModel> => {
  return {
    id: item.id,
    clinicId: item.clinicId,
    clinicName: item.clinicName,
    doctorId: item.doctorId,

    branchId: item.branchId,
    branchName: item.branchName,

    scheduleDate: item.scheduleDate?.split('T')[0],

    scheduleTimeFrom: item.scheduleTimeFrom,
    scheduleTimeTo: item.scheduleTimeTo,

    maxPatientCap: item.maxPatientCap,
    quotedFee: item.quotedFee,

    isApproved: item.isApproved,
  };
};
