import React from 'react';
import ContactData from '../components/ContactData';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function Impressum() {
  return (
    <Section className="text-center">
      <SectionHeader
        title="Impressum"
      />

      <ContactData />
    </Section>
  );
}
