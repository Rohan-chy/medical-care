import client from '@/core/network/httpClient';
import { GetReviewResponseDto } from '../domain/rating.dto';

export const getRating = async (): Promise<GetReviewResponseDto> => {
  return await client({
    url: `v1/patient/doctor/own`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
