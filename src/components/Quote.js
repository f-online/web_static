import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Section from './Section';

export default function Quote({
  quote,
  author,
  role,
  authorImage,
  website,
  year,
  className,
}) {
  return (
    <Section className={`bg-fonline-800 text-white ${className}`}>
      <div className="flex flex-col items-center">
        <div>
          <p className="text-4xl text-center italic font-light">
            {`"${quote}"`}
          </p>
        </div>
        <div className="flex items-center mt-4">
          <div className="overflow-hidden">
            <GatsbyImage
              image={authorImage}
              alt={`Bild von ${author}`}
              className="w-20 h-20 rounded-l-xl rounded-t-xl"
            />
          </div>
          <div className="ml-4">
            <div className="font-bold text-2xl">
              {website
                ? (
                  <a
                    href={website}
                    className="no-underline underline-offset-2 decoration-white hover:underline hover:text-white"
                    target="_blank"
                    rel="no-follow noreferrer"
                  >
                    {author}
                  </a>
                )
                : { author }}
              {year ? (
                <span className="font-normal ml-2 text-xs">
                  (
                  {year}
                  )
                </span>
              ) : ''}
            </div>
            <div className="text-fonline-200">
              {role}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
