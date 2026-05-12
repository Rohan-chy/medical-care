'use client';

import React from 'react';
import LayoutComponent from '@/shared/components/layout/LayoutComponent';
import { useLogout } from '@/utils/user/useLogout';
import { useUser } from '@/utils/user/useGetUser';
import { Icons } from '@/shared/icons';
import { updateClinicImageForm } from '@/shared/features/clinic/domain/forms/updateClinicImageForm';
import { useUpdateClinicImageHandle } from '@/shared/features/clinic/presentation/hooks/useUpdateClinicImageHandle';
import { useGetProfileOrganization } from '@/features/tenant/organization/profile/application/usecases/useGetProfileOrganization';
import { DEFAULT_UUID } from '@/shared/constants/defaultValues';

const data = {
  user: {
    name: 'bishal',
    email: 'bishal@gmail.com',
    avatar: '',
    url: '',
  },
  menus: [
    {
      title: 'Dashboard',
      url: '/organization',
      icon: Icons.Home,
      isActive: true,
    },
    {
      title: 'Doctors',
      url: 'Registration',
      icon: Icons.User,
      children: [
        {
          title: 'Add Doctor',
          url: '/organization/doctors/add-doctor',
          icon: Icons.Circle,
        },
        {
          title: 'Doctor Requests',
          url: '/organization/doctors/requests',
          icon: Icons.Circle,
        },
        {
          title: 'Doctor Schedules',
          url: '/organization/doctors/schedules',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Hospitals/Clinics Branch',
      url: '/organization/branch',
      icon: Icons.Hospital,
    },
    {
      title: 'Appointments',
      url: '/organization/appointments',
      icon: Icons.Calendar,
    },
    {
      title: 'Patients',
      url: '#',
      icon: Icons.Users,
      children: [
        {
          title: 'My Patients',
          url: '/organization/profile',
          icon: Icons.Circle,
          isActive: true,
        },
        {
          title: 'Patient Questions',
          url: '/organization/changePassword',
          icon: Icons.Circle,
        },
        {
          title: 'Rating/Feedback',
          url: '/organization/reviews',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Master',
      url: '#',
      icon: Icons.Master,
      children: [
        // {
        //   title: 'Doctor',
        //   url: '#',
        //   icon: Icons.User,
        //   children: [
        //     {
        //       title: 'Speciality',
        //       url: '/organization/master/doctor-category',
        //       icon: Icons.Circle,
        //     },
        //     {
        //       title: 'Sub-speciality',
        //       url: '/organization/master/doctor-subcategory',
        //       icon: Icons.Circle,
        //     },
        //   ],
        // },
        {
          title: 'Product Attribute',
          url: '/organization/master/product/product-attribute',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute Value',
          url: '/organization/master/product/product-attribute-value',
          icon: Icons.Circle,
        },
        {
          title: 'Product Category',
          url: '/organization/master/product/product-category',
          icon: Icons.Circle,
        },
        {
          title: 'Product',
          url: '/organization/master/product',
          icon: Icons.Circle,
        },
        {
          title: 'HsCode',
          url: '/organization/master/product/hsCode',
          icon: Icons.Circle,
        },
        {
          title: 'Service',
          url: '/organization/master/service',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Icons.Settings,
      children: [
        {
          title: 'Profile',
          url: '#',
          icon: Icons.User,
          children: [
            {
              title: 'General Info',
              url: '/organization/profile',
              icon: Icons.Circle,
              isActive: true,
            },
            {
              title: 'Change Password',
              url: '/organization/changePassword',
              icon: Icons.Circle,
            },
          ],
        },
      ],
    },
  ],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const form = updateClinicImageForm();

  const { data: orgProfile } = useGetProfileOrganization();
  const { data: userProfile } = useUser();

  const profile =
    orgProfile?.clinicId && orgProfile.clinicId !== DEFAULT_UUID
      ? orgProfile
      : userProfile;

  const { handleImageChange } = useUpdateClinicImageHandle({ profile });
  const { logout } = useLogout();

  const profileUpdate = {
    form,
    handleImageChange,
  };

  return (
    <LayoutComponent
      data={data}
      profileData={profile}
      hospitalAdmin={true}
      logout={() => logout('/organization/login')}
      profileUpdate={profileUpdate}
    >
      {children}
    </LayoutComponent>
  );
};

export default Layout;
