import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Question from '../components/Question';

export default function StaticPage({ pageContext: { question } }) {
  return (
    <Layout countryCode="at">
      <SEO title={question.question} />

      <Section className="container mx-auto pt-10">
        <Question question={question} />
      </Section>

    </Layout>
  );
}
