import { ReviewResponseItemDto } from '../../domain/rating.dto';

export type ReviewUI = {
  id: string;
  name: string;
  review: string;
  rating: number;
  address: string;
  image: string;
  dateTime: string;
};

export const mapReviewsToUI = (
  data: ReviewResponseItemDto[] = []
): ReviewUI[] => {
  return data.map((item) => {
    const hasValidDate = item.date && item.date !== '0001-01-01';

    const dateTime = hasValidDate
      ? new Date(`${item.date}T${item.time}`).toLocaleString()
      : '';

    return {
      id: item.id,
      name: item.patientName || 'Anonymous',
      review: item.review || '',
      rating: item.rating ?? 0,
      address: item.baseAddress || '',
      image: item.imageUrl ? `http://${item.baseAddress}${item.imageUrl}` : '',
      dateTime,
    };
  });
};
