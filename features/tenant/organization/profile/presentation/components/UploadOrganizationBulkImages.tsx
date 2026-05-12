'use client';

import { Icons } from '@/shared/icons';
import { CustomButton } from '@/components/extended/extended-button';
import { useUploadOrganizationBulkImageHandle } from '../hooks/useUploadOrganizationBulkImageHandle';

export interface props {
  data: any;
  isEdit: boolean;
}

const UploadOrganizationBulkImages = ({ data, isEdit }: props) => {
  const {
    files,
    previews,
    fileInputRef,
    handleClick,
    handleChange,
    removeImage,
    handleSubmit,
    loading,
  } = useUploadOrganizationBulkImageHandle(data);

  return (
    <div className="space-y-5">
      {/* DROP ZONE */}
      <div
        onClick={handleClick}
        className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer 
        hover:border-primary hover:bg-primary/5 transition"
      >
        <Icons.Upload size={28} className="mx-auto mb-2 text-primary" />

        <p className="font-medium">Upload hospital / clinic images</p>
        <p className="text-xs text-muted-foreground">
          Drag & drop or click • PNG, JPG (multiple allowed)
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* PREVIEW GRID */}
      {previews.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={src.url}
                alt="preview"
                className="w-full h-28 object-cover group-hover:scale-105 transition"
              />

              {/* HOVER DELETE */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button
                  onClick={() => removeImage(index)}
                  className="bg-white text-black rounded-full p-2"
                >
                  <Icons.X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <Icons.Loader className="animate-spin" size={14} />
          Uploading images...
        </div>
      )}

      {/* ACTIONS */}
      {isEdit && (
        <div className="flex justify-end gap-2">
          <CustomButton variant="outline" size={'sm'}>
            Cancel
          </CustomButton>

          <CustomButton
            onClick={handleSubmit}
            disabled={!files.length || loading}
            size={'sm'}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default UploadOrganizationBulkImages;
