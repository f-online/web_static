import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react';
import Section from '../components/Section';
import Quote from '../components/Quote';
import SectionHeader from '../components/SectionHeader';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Reviews from '../components/Reviews';
import Features from '../components/Features';

export default function StaticPage({ data: { staticPage } }) {
  return (
    <>
      {staticPage.sections.map((section, index) => {
        // Stripe background
        let cssClass = '';
        if (index === 0 || index % 2 === 0) {
          cssClass = 'bg-fonline-50';
        }

        if (section._type === 'section') {
          // special cases
          if ((staticPage.slug.current === 'impressum' && index === 0) || staticPage.slug.current === 'kontakt') {
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
        }

        if (section._type === 'quote') {
          return (
            <Quote qoute={section.quote} author={section.author} year={section.year} />
          );
        }

        if (section._type === 'teamObject') {
          return (
            <Section className={cssClass}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Team />
            </Section>
          );
        }

        if (section._type === 'faqObject') {
          return (
            <Section className={cssClass}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <FAQ limit={section.limit} />
            </Section>
          );
        }

        if (section._type === 'reviewObject') {
          return (
            <Section className={cssClass}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Reviews limit={section.limit} />
            </Section>
          );
        }

        if (section._type === 'featureObject') {
          return (
            <Section className={cssClass}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Features limit={section.limit} />
            </Section>
          );
        }

        // Fallback for not known elements
        return <></>;
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
        ... on SanityQuote {
          _type
          author
          quote
          year(formatString: "YYYY")
        }
        ... on SanitySection {
          _type
          title
          subTitle
          _rawContent
        }
        ... on SanityTeamObject {
          _type
          title
          subTitle
        }
        ... on SanityFaqObject {
          _type
          title
          subTitle
          limit
        }
        ... on SanityReviewObject {
          _type
          title
          subTitle
          limit
        }
        ... on SanityFeatureObject {
          _type
          title
          subTitle
          limit
        }
      }
    }
  }
`;
