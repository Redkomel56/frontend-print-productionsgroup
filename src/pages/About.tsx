import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import OurHistory from '../components/sections/OurHistory';
import OurAchievements from '../components/sections/OurAchievements';

const About: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <OurHistory />
      <OurAchievements />
    </div>
  );
};

export default About; 