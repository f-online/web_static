import * as React from 'react';
import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Seite nicht gefunden" />
      <Section>
        <SectionHeader title="Falsch abgebogen?" subtitle="Leider können wir nicht bei alle Fragen helfen. Aber vielleicht verbirgt sich hinter dem folgenden Link die Lösung?" />

        <div className="text-center">
          <ButtonLink to="/" text="Hier entlang" />
        </div>
      </Section>
    </>
  );
}
