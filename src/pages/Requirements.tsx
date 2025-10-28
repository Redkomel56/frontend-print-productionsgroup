import React from 'react';
import RequirementsHero from '../components/sections/RequirementsHero';
import RequirementsContent from '../components/sections/RequirementsContent';
import RequirementsDetails from '../components/sections/RequirementsDetails';
import RequirementsFAQ from '../components/sections/RequirementsFAQ';
import RequirementsCTA from '../components/sections/RequirementsCTA';

const Requirements: React.FC = () => {
  return (
    <div>
      <RequirementsHero />
      <RequirementsContent />
      <RequirementsDetails />
      <RequirementsFAQ />
      <RequirementsCTA />
    </div>
  );
};

export default Requirements; 