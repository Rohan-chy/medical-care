export function RatingBar({
  star,
  count,
  percentage,
}: {
  star: number;
  count: number;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-12 text-sm">{star} stars</span>

      <div className="flex-1 h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-black rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-10 text-sm text-gray-500">{count}</span>
    </div>
  );
}
