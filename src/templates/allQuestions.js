import React from 'react';
import { FaQuestion, FaQuestionCircle } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import ButtonLink from '../components/ButtonLink';

export default function AllQuestions({ pageContext: { questions } }) {
  return (
    <Layout countryCode="at">
      <SEO title="Hey hey" />

      <Section className="container mx-auto pt-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Iterate over questions */}
          {questions.map((question) => (
            <ButtonLink
              key={question.id}
              to={`/at/fragenkatalog/frage/${question.qst_id}`}
            >
              <div className="flex items-center">
                {`Frage ${question.qst_id}`}
              </div>
            </ButtonLink>
          ))}
        </div>
      </Section>

    </Layout>
  );
}
