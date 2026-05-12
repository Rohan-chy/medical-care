'use client';

import { useState } from 'react';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import ProfileImageUpload from '@/shared/components/ProfileImageUpload';
import { Icons } from '@/shared/icons';
import { useGetProfileOrganization } from '../../application/usecases/useGetProfileOrganization';
import { useUpdateClinicImageHandle } from '@/shared/features/clinic/presentation/hooks/useUpdateClinicImageHandle';
import { useOrganizationProfileForm } from '../../domain/organizationProfile.form';
import { useOrganizationProfileHandler } from '../hooks/useOrganizationProfileHandler';
import UploadOrganizationBulkImages from './UploadOrganizationBulkImages';

export default function ClinicProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const { data: profile } = useGetProfileOrganization();

  const form = useOrganizationProfileForm(profile);
  const { handleImageChange } = useUpdateClinicImageHandle({ profile });
  const { onSubmit, loading } = useOrganizationProfileHandler();

  return (
    <div
      className={`max-w-4xl mx-auto px-6 py-3 rounded-2xl shadow transition 
      ${isEdit ? 'bg-primary-50 border border-primary-200' : 'bg-white border'}`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
          {isEdit ? <Icons.Pencil size={18} /> : <Icons.Eye size={18} />}
          {isEdit ? 'Editing Profile' : 'Profile'}
        </h2>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? 'View Profile' : 'Edit Profile'}
        </Button>
      </div>

      {/* PROFILE IMAGE */}
      <div className="flex justify-center ">
        <div className="relative group">
          <ProfileImageUpload
            form={form}
            name=""
            canEdit={isEdit}
            apiImage={{
              baseAddress: profile?.baseAddress ?? '',
              path: profile?.imageUrl ?? '',
            }}
            onChange={handleImageChange}
            className="w-30 h-30"
          />

          {/* {isEdit && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs rounded-full transition">
              Change Photo
            </div>
          )} */}
        </div>
      </div>

      {/* FORM */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* BASIC */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-3">
                Basic Info
              </h3>
              <div className="grid  gap-4">
                <FloatingLabelFormInput
                  form={form}
                  name="name"
                  label="Clinic Name"
                  disabled={!isEdit}
                />
                <FloatingLabelFormInput
                  form={form}
                  name="type"
                  label="Type"
                  disabled={!isEdit}
                />
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-3">
                Contact Info
              </h3>
              <div className="grid grid-cols-3  gap-4">
                <FloatingLabelFormInput
                  form={form}
                  name="contactNo"
                  label="Contact No"
                  disabled={!isEdit}
                />
                <FloatingLabelFormInput
                  form={form}
                  name="location"
                  label="Location"
                  disabled={!isEdit}
                />
                <FloatingLabelFormInput
                  form={form}
                  name="manager"
                  label="Manager"
                  disabled={!isEdit}
                />
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-3">
                Legal Details
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <FloatingLabelFormInput
                  form={form}
                  name="pan"
                  label="PAN"
                  disabled={!isEdit}
                />
                <FloatingLabelFormInput
                  form={form}
                  name="registrationNumber"
                  label="Registration No"
                  disabled={!isEdit}
                />
                <FloatingLabelFormInput
                  form={form}
                  name="registrationDate"
                  label="Registration Date"
                  type="date"
                  disabled={!isEdit}
                />
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          {isEdit && (
            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="outline"
                size={'sm'}
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={loading} size={'sm'}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          )}
        </form>
      </Form>

      {/* GALLERY */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-md text-primary font-semibold mb-4">
          Image Gallery
        </h3>
        <UploadOrganizationBulkImages data={profile} isEdit={isEdit} />
      </div>
    </div>
  );
}
