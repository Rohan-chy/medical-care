import { RatingStars } from './Stars';

const ReviewCard = ({ reviews }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {reviews.map((review: any) => {
        const hasImage = review?.imageUrl;

        return (
          <div
            key={review.id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <div className="flex items-start gap-3">
              {hasImage ? (
                <img
                  src={`http://${review.baseAddress}${review.imageUrl}`}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold border">
                  {review.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.name}</h4>

                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="mt-1">
                  <RatingStars value={review.rating} />
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2 text-sm">"{review.review}"</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCard;
