import ProfileImageUpload from '@/shared/components/ProfileImageUpload';
import { useUploadDoctorCategoryImage } from '../../application/usecases/useUploadDoctorCategoryImage';
import { uploadDoctorCategoryImageForm } from '../../domain/form/useUploadDoctorCategoryImageForm';
import { uploadDoctorCategoryImageSchema } from '../../domain/schema/uploadDoctorCategoryImage.schema';

const DoctorCategoryImageUpload = ({ data }: any) => {
  const form = uploadDoctorCategoryImageForm();

  const { mutateAsync: uploadDoctorCategoryImage } =
    useUploadDoctorCategoryImage();

  const handleImageChange = async (file: File) => {
    try {
      const parsed = uploadDoctorCategoryImageSchema.parse({
        doctorCategoryId: data?.id,
        image: file,
      });
      await uploadDoctorCategoryImage(parsed);
    } catch (err) {
      console.error('Failed to upload image', err);
    }
  };

  return (
    <ProfileImageUpload
      form={form}
      name="image"
      className="w-17 h-17"
      label={data?.categoryName?.charAt(0)?.toUpperCase() || '?'}
      onChange={handleImageChange}
      apiImage={{
        baseAddress: data?.imageBaseAddress,
        path: data?.imagePath,
      }}
    />
  );
};

export default DoctorCategoryImageUpload;
