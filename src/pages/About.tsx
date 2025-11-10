import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import OurHistory from '../components/sections/OurHistory';
import WhatWeDo from '../components/sections/WhatWeDo';
import OurPhilosophy from '../components/sections/OurPhilosophy';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import OurAchievements from '../components/sections/OurAchievements';

const About: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <OurHistory />
      <WhatWeDo />
      <OurPhilosophy />
      <WhyChooseUs />
      <OurAchievements />
    </div>
  );
};

export default About; 