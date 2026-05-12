// ---- Time slot ----
export interface StartEndTime {
  doctorClinicAllocationId: string;
  startTime: string; // "HH:mm:ss"
  endTime: string; // "HH:mm:ss"
  quotedFee: number;
}

// ---- Schedule ----
export interface AllocationSchedule {
  date: string; // ISO string
  dayOfWeek: string;
  startEndTimes: StartEndTime[];
}

// ---- Branch (NEW) ----
export interface Branch {
  branchId: string;
  name: string;
  clinicId: string;
  clinicName: string;
  location: string;
  contactNo: string;
  longitude: number;
  latitude: number;
  isMain: boolean;
  averageRating: number;
  allocationSchedules: AllocationSchedule[];
}

// ---- Clinic Allocation (UPDATED STRUCTURE) ----
export interface ClinicAllocation {
  id: string;
  clinicId: string;
  name: string;
  type: string;
  pan: string;
  baseAddress: string;
  url: string;
  branches: Branch[];
}

// ---- Doctor Certification ----
export interface DoctorCertification {
  id: string;
  certificateName: string;
  issuingOrganization: string;
}

// ---- Doctor ----
export interface DoctorDetailResponse {
  id: string;

  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  gender: number;

  dateOfBirth: string;
  dateOfBirthNp?: string;

  countryCode: string;
  contactNumber: string;

  imageBaseAddress: string;
  imagePath: string;

  councilRegistrationNumber: string;

  briefBio: string;

  clinicAllocations: ClinicAllocation[];

  doctorCertifications: DoctorCertification[];

  email: string;

  categoryName: string;
  subCategoryName: string;

  isVerified: boolean;
}
