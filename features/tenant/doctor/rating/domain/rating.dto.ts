export type ReviewResponseItemDto = {
  id: string;
  review: string;
  rating: number;
  patientId: string;
  patientName: string;
  baseAddress: string;
  imageUrl: string;
  date: string;
  time: string;
};

export type GetReviewResponseDto = {
  data: ReviewResponseItemDto[];
};
