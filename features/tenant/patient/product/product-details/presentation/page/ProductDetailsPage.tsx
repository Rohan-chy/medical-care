'use client';

import { useGetProductById } from '@/shared/features/products/product/application/usecases/useGetProductById';
import ProductDetailsCard from '../components/ProductDetails';

const ProductDetailsPage = ({ productId }: { productId: string }) => {
  const { data } = useGetProductById(productId);
  // console.log(data);
  return (
    <div>
      <ProductDetailsCard product={data} />
    </div>
  );
};

export default ProductDetailsPage;
