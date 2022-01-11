import React from 'react';
import FAQ from '../components/FAQ';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function FAQPage() {
  return (
    <Section className="bg-fonline-50">
      <SectionHeader
        title="Frequently Asked Questions (FAQ)"
        subtitle="Hast du Fragen oder funktioniert etwas nicht? Nachfolgend findest du die meist gestellten Fragen - vielleicht ist deine Antwort bereits dabei!"
      />
      <FAQ className="bg-fonline-50" />
    </Section>
  );
}
