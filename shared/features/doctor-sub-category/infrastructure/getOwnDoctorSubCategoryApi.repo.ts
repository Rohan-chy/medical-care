import client from '@/core/network/httpClient';
import { DoctorSubCategoryResponse } from '../domain/doctorSubCategory.dto';

export const getOwnDoctorSubcategory =
  async (): Promise<DoctorSubCategoryResponse> => {
    return await client({
      url: 'v1/patient/doctorSubCategory/own',
      method: 'GET',
      isProtected: false,
    });
  };
