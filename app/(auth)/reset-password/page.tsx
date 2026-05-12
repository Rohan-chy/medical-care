import { authLeftData } from '@/features/auth/organization-wtih-additionalInfo/application/utils/authLeftPanelData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';
import ResetPasswordForm from '@/shared/features/forgot-reset-password/presentation/components/ResetPasswordForm';
import { Suspense } from 'react';

const page = () => {
  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthPageLayout>
  );
};

export default page;
