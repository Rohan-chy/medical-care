import ShopByCategoryPage from '@/features/tenant/patient/shop-by-category/shop-by-category-page/presentation/page/ShopByCategoryPage';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ShopByCategoryPage categoryId={id} />;
}
