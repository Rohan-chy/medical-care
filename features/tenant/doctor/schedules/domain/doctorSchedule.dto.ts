export type BaseDoctorScheduleDto = {
  clinicId: string;
  branchId: string;
  scheduleDate: string;
  scheduleTimeFrom: string;
  scheduleTimeTo: string;
  maxPatientCap: number;
  quotedFee: number;
};

//create
export type CreateDoctorScheduleDto = BaseDoctorScheduleDto;

//update
export type UpdateDoctorScheduleDto = BaseDoctorScheduleDto & {
  id: string;
};

//response item
export type DoctorScheduleResponseItemDto = BaseDoctorScheduleDto & {
  id: string;
  doctorId: string;
  doctorName: string;
  clinicName: string;
  branchName: string;
  isApproved?: boolean;
  cancellationReason: string;
};

export type GetDoctorScheduleResponse = {
  data: DoctorScheduleResponseItemDto[];
};

export type TableRowModel = DoctorScheduleResponseItemDto;
