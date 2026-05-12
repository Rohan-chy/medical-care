export type DoctorHospitalRequestResponse = {
  id: string;
  doctorId: string;
  doctorName: string;
  clinicId: string;
  branchId: string;
  name: string;
  remarks: string;
  rejectionReason: string;
  joiningDate: string;
  designation: string;
  requestStatus: number;
};

export type DoctorHospitalRequestListResponse = {
  data: DoctorHospitalRequestResponse[];
};

export interface ClinicAndBranch {
  clinicId: string;
  clinicName: string;
  branchId: string;
  branchName: string;
}

export interface ClinicAndBranchResponse {
  clinicAndBranch: ClinicAndBranch[];
}
