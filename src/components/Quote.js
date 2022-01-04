import React from 'react';
import Section from './Section';

export default function Quote({
  qoute,
  author,
  year,
  className,
}) {
  return (
    <Section className={`bg-fonline-800 text-white text-center ${className}`}>
      <div>
        <div className="">
          <div className="text-9xl text-left h-3">“</div>
          <p className="text-4xl text-center px-5">{qoute}</p>
          <div className="text-9xl text-right leading-tight h-3 -mt-20">”</div>
        </div>
        <div className="italic mt-24">
          {`- ${author}`}
          {year && ` (${year})`}
        </div>
      </div>
    </Section>
  );
}
