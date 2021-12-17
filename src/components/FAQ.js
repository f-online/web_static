import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function FAQ({ className }) {
  const faqs = [
    {
      id: 0,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 1,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 2,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 3,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
  ];

  return (
    <Section className={className}>
      <SectionHeader
        title="Frequently Asked Questions (FAQ)"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
      />

      <div>
        {faqs.map((faq) => (
          <details key={`faq${faq.id}`} className="bg-white p-5 text-center mb-5 drop-shadow-lg text-lg transition-all">
            <summary className="font-semibold cursor-pointer">
              {faq.question}
            </summary>
            <div className="mt-5">
              {faq.answer}
            </div>

          </details>
        ))}
      </div>
    </Section>
  );
}
