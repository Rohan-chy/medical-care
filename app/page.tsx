// import SuperAdminLoginForm from '@/features/tenant/super-admin/auth/presentation/components/SuperAdminLoginForm';
import { IframeNavigationBridge } from '@/features/tenant/super-admin/page-builder/presentation/page/Bridge';
import { RenderWebPage } from '@/features/tenant/super-admin/page-builder/presentation/page/RenderPage';
import LandingPage from './client/home/LandingPage';
// import DoctorLandingPage from '@/shared/components/DoctorLandingPage';
// import PatientLandingPage from '@/shared/components/PatientLandingPage';
// import { headers } from 'next/headers';

export default async function HomePage() {
  return (
    <div>
      {/* <IframeNavigationBridge />
      <RenderWebPage /> */}
      <LandingPage />
    </div>
  );
  // const headersList = await headers();
  // // const tenant = headersList.get('x-tenant');

  // const host = headersList.get('host') || 'localhost:3000';
  // const tenant = host.split('.')[0];
  // console.log(tenant)

  // switch (tenant) {
  //   case 'patient':
  //     return <PatientLandingPage />;
  //   case 'doctor':
  //     return <DoctorLandingPage />;
  //   default:
  //     // return <LandingPage />;
  //     return( <div>
  //       <IframeNavigationBridge />
  //       <RenderWebPage />
  //     </div>)
  // return <SuperAdminLoginForm />;

  // }
}
