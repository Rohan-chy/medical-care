'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  shortDescription: string;
  basePrice: number;
  discount: number;
  currency: string;
  imageUrl: string;
  baseUrl: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
  const imageFullUrl = `http://${product.baseUrl}${product.imageUrl}`;

  const discountedPrice =
    product.basePrice - (product.basePrice * product.discount) / 100;

  return (
    <Link href={`/client/product/${product.id}`}>
      <Card className="hover:shadow-md transition">
        <CardContent className="flex gap-4 p-4">
          {/* Image */}
          <div className="w-28 h-28 shrink-0">
            <img
              src={imageFullUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-base font-semibold">{product.name}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold">
                {product.currency} {discountedPrice}
              </span>

              {product.discount > 0 && (
                <span className="text-sm line-through text-muted-foreground">
                  {product.currency} {product.basePrice}
                </span>
              )}

              {product.discount > 0 && (
                <span className="text-green-600 text-sm">
                  {product.discount}% OFF
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
