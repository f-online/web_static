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
import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function StaticPage({ data: { staticPage } }) {
  return (
    <Layout countryCode={staticPage.country.countryCode}>
      <SEO
        title={staticPage.seo.title}
        description={staticPage.seo.description}
        socialImageUrl={staticPage.seo.socialImage?.asset?.url}
      />

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
            <Section className={cssClass} key={section._id}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <BlockContent blocks={section._rawContent} ignoreUnknownTypes />
            </Section>
          );
        }

        if (section._type === 'quote') {
          return (
            <Quote
              quote={section.quote}
              author={section.author}
              role={section.role}
              authorImage={section.authorImage?.asset?.gatsbyImageData}
              year={section.year}
              website={section.website}
              key={section.key}
            />
          );
        }

        if (section._type === 'teamObject') {
          return (
            <Section className={cssClass} key={section._id}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Team countryCode={staticPage.country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'faqObject') {
          return (
            <Section className={cssClass} key={section._id}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <FAQ limit={section.limit} countryCode={staticPage.country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'reviewObject') {
          return (
            <Section className={cssClass} key={section._id}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Reviews limit={section.limit} countryCode={staticPage.country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'featureObject') {
          return (
            <Section className={cssClass} key={section._id}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Features limit={section.limit} countryCode={staticPage.country.countryCode} />
            </Section>
          );
        }

        // Fallback for not known elements
        return <></>;
      })}
    </Layout>
  );
}

export const query = graphql`
  query ($documentId: String!) {
    staticPage: sanityStaticPage(_id: { eq: $documentId }) {
      _id
      title
      slug {
        current
      }
      seo {
        title
        description
        socialImage {
          asset {
            url
          }
        }
      }
      country {
        countryCode
      }
      sections {
        ... on SanityQuote {
          _type
          author
          role
          authorImage {
            asset {
              gatsbyImageData
            }
          }
          quote
          website
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
