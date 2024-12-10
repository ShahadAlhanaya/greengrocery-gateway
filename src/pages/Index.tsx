import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import StatsSection from '@/components/StatsSection';
import HowToUseSection from '@/components/HowToUseSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <StatsSection />
      <HowToUseSection />
    </main>
  );
};

export default Index;