import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ButtonLink from './ButtonLink';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function FAQ({ className, limit = 0 }) {
  const { faqs } = useStaticQuery(graphql`
    query {
      faqs: allSanityFaq(filter: {countries: {elemMatch: {countryCode: {eq: "at"}}}}) {
        nodes {
          id
          question
          _rawAnswer
        }
      }
    }
  `);

  let faqNodes = faqs.nodes;

  if (limit > 0) {
    faqNodes = faqNodes.slice(0, limit);
  }

  return (
    <Section className={className}>
      <SectionHeader
        title="Frequently Asked Questions (FAQ)"
        subtitle="Hast du Fragen oder funktioniert etwas nicht? Nachfolgend findest du die meist gestellten Fragen - vielleicht ist deine Antwort bereits dabei!"
      />

      <div>
        {faqNodes.map((faq) => (
          <details key={`faq${faq.id}`} className="bg-white p-5 text-center mb-5 drop-shadow-lg text-lg transition-all rounded">
            <summary className="font-semibold cursor-pointer select-none">
              {faq.question}
            </summary>
            <div className="mt-5 text-gray-600 text-base">
              <BlockContent blocks={faq._rawAnswer} ignoreUnknownTypes />
            </div>

          </details>
        ))}
      </div>

      {limit > 0
        && (
          <div className="text-center mt-10">
            <ButtonLink to="/faq" text="Alle Fragen anzeigen" />
          </div>
        )}
    </Section>
  );
}
