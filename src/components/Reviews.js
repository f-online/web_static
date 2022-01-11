import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import ButtonLink from './ButtonLink';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Stars from './Stars';

export default function Reviews({ className, limit }) {
  const { reviews } = useStaticQuery(graphql`
    query {
      reviews: allSanityReview {
        nodes {
          id
          name
          platform
          stars
          reviewText
        }
      }
    }
  `);

  return (
    <Section className={className}>
      <SectionHeader
        title="Reviews"
        subtitle="Das sagen andere Nutzer über F-Online"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.nodes.map((review) => (
          <div className="flex flex-col justify-between bg-fonline-50 rounded-l-xl rounded-t-xl p-4">
            <Stars value={review.stars} />
            <div className="mt-2 mb-auto italic">{review.reviewText}</div>
            <div className="flex justify-between mt-2 text-gray-500">
              <div>
                {`- ${review.name}`}
              </div>

              <div className="text-xs inline-flex items-center ml-2">
                {review.platform === 'ios'
                && (
                <>
                  <AiFillApple className="inline mr-1" />
                  App Store
                </>
                )}
                {review.platform === 'android'
                && (
                <>
                  <AiFillAndroid className="inline mr-1" />
                  Play Store
                </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {limit > 0
        && (
          <div className="text-center mt-10">
            <ButtonLink to="/reviews" text="Mehr Reviews anzeigen" />
          </div>
        )}
    </Section>
  );
}
