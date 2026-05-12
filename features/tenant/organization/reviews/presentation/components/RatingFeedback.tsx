'use client';

import { useGetClinicById } from '@/shared/features/clinic/application/usecases/useGetClinicById';
import { useGetProfileOrganization } from '../../../profile/application/usecases/useGetProfileOrganization';
import ReviewCard from './ReviewCard';
import { RatingBar } from './RatingBar';
import { RatingStars } from './Stars';

export default function Reviews() {
  const { data: profile } = useGetProfileOrganization();

  const { data: clinicDetails } = useGetClinicById(
    profile?.clinicId ?? '',
    !!profile?.clinicId
  );

  const reviews = clinicDetails?.reviews ?? [];

  /* ---------------- STATS CALCULATION ---------------- */
  const totalReviews = reviews.length;

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (totalReviews || 1);

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;

    return {
      star,
      count,
      percentage: totalReviews ? (count / totalReviews) * 100 : 0,
    };
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Ratings & Feedback</h2>

      {/* ---------------- STATISTICS SECTION ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Review Statistics</h3>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="text-center w-40">
            <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>

            <div className="flex justify-center mt-2">
              <RatingStars value={Math.round(averageRating)} />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Based on {totalReviews} reviews
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 space-y-2">
            {ratingCounts.map((r) => (
              <RatingBar
                key={r.star}
                star={r.star}
                count={r.count}
                percentage={r.percentage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- REVIEWS LIST ---------------- */}
      <ReviewCard reviews={reviews} />
    </div>
  );
}
