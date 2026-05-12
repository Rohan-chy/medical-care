'use client';

import { useGetProductsByCategoryId } from '@/shared/features/products/product/application/usecases/useGetProductsByCategoryId';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/ProductCardSkeleton';
import { useGetProductCategory } from '@/shared/features/products/product-category/application/usecases/useGetProductCategory';
import { CategorySidebar } from '../components/CategorySidebar';

const ShopByCategoryPage = ({ categoryId }: { categoryId: string }) => {
  const { data, isPending } = useGetProductsByCategoryId(categoryId);
  const productsList = data?.data || [];

  const { data: productCategories } = useGetProductCategory();
  const categories = productCategories?.data || [];

  return (
    <div className="grid grid-cols-12 gap-6 p-2">
      {/* Sidebar */}
      <div className="col-span-3">
        <CategorySidebar categories={categories} />
      </div>

      {/* Product List */}
      <div className="col-span-9 flex flex-col gap-4">
        {/* Loading */}
        {isPending &&
          Array.from({ length: 5 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}

        {/* Products */}
        {productsList.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Empty */}
        {!isPending && productsList.length === 0 && (
          <p className="flex items-center justify-center min-h-screen text-muted-foreground">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopByCategoryPage;
