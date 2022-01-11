import React from 'react';
import Reviews from '../components/Reviews';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function ReviewsPage() {
  return (
    <Section>
      <SectionHeader
        title="Reviews"
        subtitle="Das sagen andere Nutzer über F-Online"
      />

      <Reviews />
    </Section>
  );
}
