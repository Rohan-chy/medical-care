import { ClinicReview, ClinicTiming, clinicService } from '../../domain';

export interface GetClinicByIdDTO {
  id: string;
  name: string;
  location: string;
  type: string;

  pan: string;
  contactNo: string;
  manager: string;

  registrationNumber: string;
  registrationDate: string;

  averageRating?: number;
  longitude?: number;
  latitude?: number;

  baseAddress: string;
  imageUrl: string;

  clinicImages: {
    id: string;

    title: string;
    firstName: string;
    middleName?: string;
    lastName: string;

    contactNo: string;

    category: string;
    subCategory: string;

    baseAddress: string;
    imageUrl: string;
  }[];

  doctors: {
    id: string;

    title: string;
    firstName: string;
    middleName?: string;
    lastName: string;

    contactNo: string;

    category: string;
    subCategory: string;

    baseAddress: string;
    imageUrl: string;
  }[];

  reviews: ClinicReview[];
  timings: ClinicTiming[];
  clinicService: clinicService[];
}
