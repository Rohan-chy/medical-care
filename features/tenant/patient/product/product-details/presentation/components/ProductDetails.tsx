'use client';

import { useState } from 'react';

// type Product = {
//   id: string;
//   name: string;
//   sku: string;
//   upc: string;
//   ean: string;
//   category: string;
//   subCategory: string;
//   brand: string;
//   manufacturer: string;
//   model: string;
//   variant: string;
//   version: string;
//   shortDescription: string;
//   longDescription: string;
//   basePrice: number;
//   discount: number;
//   bulkPrice: number;
//   tax: number;
//   currency: string;
//   minimumOrderQuantity: number;
//   maximumOrderQuantity: number;
//   leadTimeInDays: number;
//   dimensionLWH: string;
//   netWeight: number;
//   grossWeight: number;
//   hsCode: string;
//   returnOrWarrantyPolicy: string;
//   targetAudience: string;
//   usecase: string;
//   contractTerms: string;
//   sustainabilityInfo: string;
//   productCategoryId: string;
//   baseUrl: string;
//   imageUrl: string;
//   reviewsCount: number;
//   averageRating: number;
//   alternateBaseUrl: string;

//   imageUrls: ImageItem[];

//   ratings: Ratings;

//   reviews: Review[];

//   dynamicAttributes: DynamicAttribute[];

//   faqAs: any[]; // you can refine this if structure becomes known
// };

// type ImageItem = {
//   id: string;
//   value: string;
// };

// type Ratings = {
//   oneStarCount: number;
//   twoStarCount: number;
//   threeStarCount: number;
//   fourStarCount: number;
//   fiveStarCount: number;
// };

// type Review = {
//   id: string;
//   name: string;
//   review: string;
//   rating: number;
//   baseAddress: string;
//   imageUrl: string;
//   date: string; // or Date if parsed
// };

// type DynamicAttribute = {
//   id: string;
//   attributeName: string;
//   attributeValue: string;
//   attributeValueId: string;
// };

export default function ProductDetailsCard({ product }: { product: any }) {
  const [qty, setQty] = useState(1);
  // console.log(product);

  const mainImage =
    product?.baseUrl && product?.imageUrl
      ? `http://${product.baseUrl}${product.imageUrl}`
      : '';
  const otherImageBaseUrl = product?.alternateBaseUrl
    ? `http://${product.alternateBaseUrl}`
    : '';

  const discountedPrice =
    product?.basePrice - (product?.basePrice * product?.discount) / 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Images */}
        <div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src={mainImage}
              alt={product?.name}
              className="w-full h-105 object-contain"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {product?.imageUrls?.map((img: any) => (
              <img
                key={img.id}
                src={`${otherImageBaseUrl}${img.value}`}
                className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Info */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {product?.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {product?.brand} • {product?.category}
            </p>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
              {product?.averageRating} ★
            </span>
            <span className="text-gray-600 text-sm">
              ({product?.reviewsCount} reviews)
            </span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#0D6641]">
              {product?.currency} {discountedPrice.toFixed(2)}
            </span>
            <span className="line-through text-gray-500">
              {product?.currency} {product?.basePrice}
            </span>
            <span className="text-red-600 font-semibold">
              {product?.discount}% OFF
            </span>
          </div>

          {/* Short Description */}
          <p className="text-gray-700">{product?.shortDescription}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <label className="font-medium">Quantity:</label>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border px-3 py-1 rounded"
            >
              {[...Array(product?.maximumOrderQuantity || 10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* CTA */}
          <button className="bg-[#0D6641] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">
            Add to Cart
          </button>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 border-t pt-4">
            <p>
              <strong>SKU:</strong> {product?.sku}
            </p>
            <p>
              <strong>Brand:</strong> {product?.brand}
            </p>
            <p>
              <strong>Model:</strong> {product?.model}
            </p>
            <p>
              <strong>Weight:</strong> {product?.netWeight} kg
            </p>
            <p>
              <strong>Warranty:</strong> {product?.returnOrWarrantyPolicy}
            </p>
            <p>
              <strong>Delivery:</strong> {product?.leadTimeInDays} days
            </p>
          </div>
        </div>
      </div>

      {/* BELOW: Tabs / Sections */}
      <div className="max-w-7xl mx-auto mt-12 space-y-10">
        {/* Description */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {product?.longDescription}
          </p>
        </section>

        {/* Dynamic Attributes */}
        {product?.dynamicAttributes?.length > 0 && (
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product?.dynamicAttributes.map((attr: any) => (
                <div
                  key={attr.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="text-gray-600">{attr.attributeName}</span>
                  <span className="font-medium">{attr.attributeValue}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        {product?.reviews?.length > 0 && (
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-5">Customer Reviews</h2>

            <div className="space-y-4">
              {product?.reviews.map((review: any) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex justify-between">
                    <p className="font-semibold">{review.name}</p>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-yellow-500 text-sm">
                    {'★'.repeat(review.rating)}
                  </p>
                  <p className="text-gray-700 mt-1">{review.review}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
