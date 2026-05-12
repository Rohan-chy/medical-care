import ProductDetailsPage from '@/features/tenant/patient/product/product-details/presentation/page/ProductDetailsPage';
type PageProps = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ProductDetailsPage productId={id} />;
}
