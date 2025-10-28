import React from 'react';
import HeroBanner from '../components/sections/HeroBanner';
import Advantages from '../components/sections/Advantages';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import CooperationSteps from '../components/sections/CooperationSteps';

const Home: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <Advantages />
      <AboutSection />
      <ServicesSection />
      <CooperationSteps />
    </div>
  );
};

export default Home; 