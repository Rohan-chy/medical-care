import ServiceProviderSlider from '@/components/custom-components/ServiceProviderSlider';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import SpecialitySection from '@/components/custom-components/Speciality';
import PackageGrid from '@/components/custom-components/PackageGrid';
import ShopByCategory from '@/components/custom-components/ShopByCategory';
import ArticlesSection from '@/components/custom-components/ArticlesSection';

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceProviderSlider />
      <SpecialitySection />
      <PackageGrid />
      <ShopByCategory />
      <ArticlesSection />
    </main>
  );
};

export default LandingPage;
