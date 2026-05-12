export type HospitalDataItem = {
  clinicId: string;
  clinicName: string;
  branchId: string;
  branchName: string;
};

export type Branch = {
  branchId: string;
  branchName: string;
};

export type GroupedClinic = {
  clinicId: string;
  clinicName: string;
  branches: Branch[];
};

export const groupBranch = (
  hospitalData: HospitalDataItem[] = [],
  clinicId?: string
): { branchData: Branch[] } => {
  const groupedClinics: GroupedClinic[] = Object.values(
    hospitalData.reduce<Record<string, GroupedClinic>>((acc, item) => {
      if (!acc[item.clinicId]) {
        acc[item.clinicId] = {
          clinicId: item.clinicId,
          clinicName: item.clinicName,
          branches: [],
        };
      }

      acc[item.clinicId].branches.push({
        branchId: item.branchId,
        branchName: item.branchName,
      });

      return acc;
    }, {})
  );

  const selectedClinic = groupedClinics.find(
    (clinic) => clinic.clinicId === clinicId
  );

  const branchData = selectedClinic?.branches ?? [];

  return { branchData };
};
