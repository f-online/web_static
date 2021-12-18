import { Link } from 'gatsby';
import React from 'react';
import Button from './Button';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function FAQ({ className, limit = 0 }) {
  let faqs = [
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
    {
      id: 4,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 5,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 6,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 7,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 8,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
    {
      id: 39,
      question: 'Das ist eine Frage',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    },
  ];

  if (limit > 0) {
    faqs = faqs.slice(0, limit);
  }

  return (
    <Section className={className}>
      <SectionHeader
        title="Frequently Asked Questions (FAQ)"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
      />

      <div>
        {faqs.map((faq) => (
          <details key={`faq${faq.id}`} className="bg-white p-5 text-center mb-5 drop-shadow-lg text-lg transition-all">
            <summary className="font-semibold cursor-pointer select-none">
              {faq.question}
            </summary>
            <div className="mt-5 text-gray-600 text-base">
              {faq.answer}
            </div>

          </details>
        ))}
      </div>

      {limit > 0
        && (
          <div className="text-center mt-10">
            <Button to="/faq" text="Alle Fragen anzeigen" />
          </div>
        )}
    </Section>
  );
}
