import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ButtonLink from './ButtonLink';

export default function FAQ({ limit = 0 }) {
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
    <>
      <div>
        {faqNodes.map((faq) => (
          <details key={faq.id} className="bg-white p-5 text-center mb-5 drop-shadow-lg text-lg transition-all rounded">
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
    </>
  );
}
