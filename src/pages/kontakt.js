import React from 'react';
import ButtonLink from '../components/ButtonLink';
import ContactData from '../components/ContactData';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function Kontakt() {
  return (
    <>
      <Section className="text-center">
        <SectionHeader
          title="Kontakt"
        />

        <ContactData />
      </Section>
      <Section className="text-center">
        <SectionHeader
          title="Werben mit F-Online"
          subtitle="Auf F-Online.at erreichen Sie zielgerichtet eine geschlossene Zielgruppe, wie sie kein anderer bieten kann."
        />

        <p>
          Möchten Sie zusammen mit uns jeden dritten Führerscheinanfänger in Österreich erreichen? Dann sehen Sie sich die weiterführenden Information auf
          {' '}
          <a href="https://mediadaten.f-online.at/">https://mediadaten.f-online.at/</a>
          {' '}
          an.
        </p>

        <p>
          <ButtonLink to="https://mediadaten.f-online.at/" text="Zu den Mediadaten" />
        </p>
      </Section>
    </>
  );
}
