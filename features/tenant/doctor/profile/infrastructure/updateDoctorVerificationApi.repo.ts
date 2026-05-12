import client from '@/core/network/httpClient';

export const updateDoctorVerification = async (data: any) => {
  return await client({
    url: `v1/patient/doctorVerification`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
