import React from 'react';
import ContactsHero from '../components/sections/ContactsHero';
import ContactInfo from '../components/sections/ContactInfo';

const Contacts: React.FC = () => {
  return (
    <div>
      <ContactsHero />
      <ContactInfo />
    </div>
  );
};

export default Contacts; 