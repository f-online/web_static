import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  AiFillApple, AiFillAndroid, AiOutlineStar, AiFillStar,
} from 'react-icons/ai';
import filterNodeByMultipleCountryCodes from '../utils/filterNodeByMultipleCountryCodes';
import ButtonLink from './ButtonLink';

export default function Reviews({ limit, countryCode }) {
  const { reviews } = useStaticQuery(graphql`
    query {
      reviews: allSanityReview(sort: {date: DESC}) {
        nodes {
          _id
          name
          platform
          stars
          reviewText
          url
          date(formatString: "DD.MM.YYYY")
          countries: _rawCountries(resolveReferences: {maxDepth: 1})
        }
      }
    }
  `);

  let reviewNodes = filterNodeByMultipleCountryCodes(reviews.nodes, countryCode);

  if (limit > 0) {
    reviewNodes = reviewNodes.slice(0, limit);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviewNodes.map((review) => (
          <div
            className="flex flex-col justify-between bg-fonline-50 rounded-l-xl rounded-t-xl p-4"
            key={review._id}
          >
            <div className="flex justify-between items-end">
              <Stars value={review.stars} keySuffix={review._id} />

              <a
                href={review.url}
                className="text-xs no-underline underline-offset-2 hover:underline text-gray-500"
              >
                {review.date}
              </a>
            </div>
            <div className="mt-2 mb-auto italic">{review.reviewText}</div>
            <div className="flex justify-between mt-2 text-gray-500">
              <a
                href={review.url}
                target="_blank"
                rel="noreferrer"
                className="no-underline underline-offset-2 hover:underline"
              >
                {`- ${review.name}`}
              </a>

              <a
                href={review.url}
                target="_blank"
                rel="noreferrer"
                className="no-underline underline-offset-2 hover:underline"
              >
                <div className="text-xs inline-flex items-center ml-2">
                  {review.platform === 'ios'
                && (
                <>
                  See on
                  <AiFillApple className="inline mr-1 ml-1" />
                  App Store
                </>
                )}
                  {review.platform === 'android'
                && (
                <>
                  See on
                  <AiFillAndroid className="inline mr-1 ml-1" />
                  Play Store
                </>
                )}
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {limit > 0
        && (
          <div className="text-center mt-10">
            <ButtonLink to={`/${countryCode}/reviews`} text="Mehr Reviews anzeigen" />
          </div>
        )}
    </>
  );
}

function Stars({
  value, max = 5, size = 25, className, keySuffix,
}) {
  const fullStars = Array.from(Array(value).keys());
  const emptyStars = Array.from(Array(max - value).keys());

  return (
    <span className={`inline-flex text-fonline-500 ${className}`}>
      {fullStars.map((mapValue) => (
        <AiFillStar size={size} key={`filled-${mapValue}-${keySuffix}`} />
      ))}
      {emptyStars.map((mapValue) => (
        <AiOutlineStar size={size} key={`empty-${mapValue}-${keySuffix}`} />
      ))}
    </span>
  );
}
