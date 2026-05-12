'use client';

import { mapReviewsToUI } from '../../application/mapper/reviewsToUI.mapper';
import { RatingStars } from '../components/RatingStars';
import { useAllRatingHandler } from '../hooks/useAllRatingHandler';

export default function RatingFeedback() {
  const { ratingData } = useAllRatingHandler();

  const feedbackList = mapReviewsToUI(ratingData ?? []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Ratings & Feedback</h2>

      <div className="grid grid-cols-3 gap-4">
        {feedbackList.map((feedback) => (
          <div
            key={feedback.id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <div className="flex items-start gap-3">
              {feedback.image ? (
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold border">
                  {feedback.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{feedback.name}</h4>
                  <span className="text-sm text-gray-500">
                    {feedback.dateTime}
                  </span>
                </div>

                <div className="mt-1">
                  <RatingStars value={feedback.rating} />
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2 text-sm">"{feedback.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
