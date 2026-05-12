'use client';

import React from 'react';
import { IframeNavigationBridge } from '@/features/tenant/super-admin/page-builder/presentation/page/Bridge';
import { RenderWebPage } from '@/features/tenant/super-admin/page-builder/presentation/page/RenderPage';
import Footer1 from '@/features/tenant/super-admin/page-builder/presentation/components/green/Footer1Green';
import Navbar from '@/shared/components/Navbar';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <IframeNavigationBridge />
      <RenderWebPage />
      <Footer1 />
    </div>
  );
}
