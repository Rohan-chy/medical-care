export interface ClinicDoctor {
  id: string;

  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  contactNo: string;

  category: string;
  subCategory: string;

  baseAddress?: string;
  imageUrl: string | null;
}
