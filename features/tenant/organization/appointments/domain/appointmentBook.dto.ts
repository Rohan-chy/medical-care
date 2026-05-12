export type AppointmentDto = {
  paymentOptions: number;
  paymentStatus: number;
  bookingStatus: number;

  patientId: string;
  doctorClinicAllocationId: string;

  status: string;

  fee: number;
  quotedFee: number;

  doctorName: string;
  branchName: string;
  patientName: string;

  date: string;
  timeFrom: string;
  timeTo: string;
};

//get response
export type AppointmentResponseItemDto = AppointmentDto;

export type AppointmentResponse = {
  data: AppointmentResponseItemDto[];
};
