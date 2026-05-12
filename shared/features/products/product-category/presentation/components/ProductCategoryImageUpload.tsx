import ProfileImageUpload from '@/shared/components/ProfileImageUpload';
import { useUploadProductCategoryImageForm } from '../../domain/form/productCategoryImage.form';
import { useUploadProductCategoryImage } from '../../application/usecases/useUploadProductCategoryImage';
import { uploadProductCategoryImageSchema } from '../../domain/schema/uploadProductCategoryImage.schema';

const ProductCategoryImageUpload = ({ data }: any) => {
  const form = useUploadProductCategoryImageForm();
  const label = data?.name?.charAt(0)?.toUpperCase() || '?';
  const apiImage = {
    baseAddress: data?.baseAddress,
    path: data?.imageUrl,
  };

  const { mutateAsync: uploadProductCategoryImage } =
    useUploadProductCategoryImage();

  const handleImageChange = async (file: File) => {
    try {
      const parsed = uploadProductCategoryImageSchema.parse({
        productCategoryId: data?.id,
        image: file,
      });
      await uploadProductCategoryImage(parsed);
    } catch (err) {
      console.error('Failed to upload image', err);
    }
  };

  return (
    <ProfileImageUpload
      form={form}
      name="image"
      className="w-17 h-17"
      label={label}
      onChange={handleImageChange}
      apiImage={apiImage}
    />
  );
};

export default ProductCategoryImageUpload;
