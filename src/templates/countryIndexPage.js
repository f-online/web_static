import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Team from '../components/Team';
import Section from '../components/Section';
import Reviews from '../components/Reviews';
import Quote from '../components/Quote';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import Login from '../components/Login';
import Layout from '../components/Layout';

export default function countryIndexPage({ data: { country } }) {
  return (
    <Layout countryCode={country.countryCode}>
      <SEO
        title={country.seo.title}
        description={country.seo.description}
        socialImageUrl={country.seo.socialImage?.asset?.url}
      />

      {country.sections.map((section, index) => {
        // Stripe background
        let cssClass = 'bg-fonline-50';
        if (index === 0 || index % 2 === 0) {
          cssClass = '';
        }

        if (section._type === 'loginObject') {
          return (
            <Login
              title={section.title}
              subTitle={section.subTitle}
              screenshot={section.screenshot.asset.gatsbyImageData}
              key={section._key}
              />
          );
        }

        if (section._type === 'section') {
          return (
            <Section className={cssClass} key={section._key}>
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
            <Quote
              qoute={section.quote}
              author={section.author}
              year={section.year}
              key={section._key}
            />
          );
        }

        if (section._type === 'teamObject') {
          return (
            <Section className={cssClass} key={section._key}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Team countryCode={country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'faqObject') {
          return (
            <Section className={cssClass} key={section._key}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <FAQ limit={section.limit} countryCode={country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'reviewObject') {
          return (
            <Section className={cssClass} key={section._key}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Reviews limit={section.limit} countryCode={country.countryCode} />
            </Section>
          );
        }

        if (section._type === 'featureObject') {
          return (
            <Section className={cssClass} key={section._key}>
              <SectionHeader
                title={section.title}
                subtitle={section.subTitle}
              />

              <Features limit={section.limit} countryCode={country.countryCode} />
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
    country: sanityCountry(id: { eq: $documentId }) {
      id
      name
      countryCode
      seo {
        title
        description
        socialImage {
          asset {
            url
          }
        }
      }
      sections {
        ... on SanityQuote {
          _key
          _type
          author
          quote
          year(formatString: "YYYY")
        }
        ... on SanitySection {
          _key
          _type
          title
          subTitle
          _rawContent
        }
        ... on SanityTeamObject {
          _key
          _type
          title
          subTitle
        }
        ... on SanityFaqObject {
          _key
          _type
          title
          subTitle
          limit
        }
        ... on SanityReviewObject {
          _key
          _type
          title
          subTitle
          limit
        }
        ... on SanityFeatureObject {
          _key
          _type
          title
          subTitle
          limit
        }
        ... on SanityLoginObject {
          _key
          _type
          title
          subTitle
          screenshot {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
