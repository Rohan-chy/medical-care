'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardContent className="flex gap-4 p-4">
        <Skeleton className="w-28 h-28 rounded-lg" />

        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/3 mt-2" />
        </div>
      </CardContent>
    </Card>
  );
};
