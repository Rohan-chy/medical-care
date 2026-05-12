export type DoctorHospitalRequestResponse = {
  id: string;
  doctorId: string;
  doctorName: string;
  clinicId: string;
  clinicName: string;
  branchId: string;
  remarks: string;
  rejectionReason: string;
  joiningDate: string;
  designation: string;
  requestStatus: number;
};

export type DoctorHospitalRequestListResponse = {
  data: DoctorHospitalRequestResponse[];
};
