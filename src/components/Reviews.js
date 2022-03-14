import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  AiFillApple, AiFillAndroid, AiOutlineStar, AiFillStar,
} from 'react-icons/ai';
import ButtonLink from './ButtonLink';

export default function Reviews({ limit }) {
  const { reviews } = useStaticQuery(graphql`
    query {
      reviews: allSanityReview(filter: {countries: {elemMatch: {countryCode: {eq: "at"}}}}) {
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

  let reviewNodes = reviews.nodes;

  if (limit > 0) {
    reviewNodes = reviewNodes.slice(0, limit);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviewNodes.map((review) => (
          <div
            className="flex flex-col justify-between bg-fonline-50 rounded-l-xl rounded-t-xl p-4"
            key={review.id}
          >
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
    </>
  );
}

function Stars({
  value, max = 5, size = 25, className,
}) {
  const fullStars = new Array(value).fill(0);
  const emptyStars = new Array(max - value).fill(0);

  return (
    <span className={`inline-flex text-fonline-500 ${className}`}>
      {fullStars.map(() => (
        <AiFillStar size={size} />
      ))}
      {emptyStars.map(() => (
        <AiOutlineStar size={size} />
      ))}
    </span>
  );
}
