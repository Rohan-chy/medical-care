import { useGetRating } from '../../application/usecases/useGetRating';

export const useAllRatingHandler = () => {
  const { data: rating } = useGetRating();
  const ratingData = rating?.data;
  console.log(ratingData);
  return {
    ratingData,
  };
};
