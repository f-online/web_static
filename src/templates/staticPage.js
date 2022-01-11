import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function StaticPage({ data: { staticPage } }) {
  return (
    <>
      {staticPage.sections.map((section, index) => {
        // Stripe background
        let cssClass = '';
        if (index === 0 || index % 2 === 0) {
          cssClass = 'bg-fonline-50';
        }

        // special impressum case
        if (staticPage.slug.current === 'impressum') {
          cssClass += ' text-center';
        }

        return (
          <Section className={cssClass}>
            <SectionHeader
              title={section.title}
              subtitle={section.subtitle}
            />

            <BlockContent blocks={section._rawContent} ignoreUnknownTypes />
          </Section>
        );
      })}
    </>
  );
}

export const query = graphql`
  query ($staticPageId: String!) {
    staticPage: sanityStaticPage(id: { eq: $staticPageId }) {
      id
      title
      slug {
        current
      }
      sections {
        title
        subTitle
        _rawContent
      }
    }
  }
`;
