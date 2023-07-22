import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterNodeByMultipleCountryCodes from '../utils/filterNodeByMultipleCountryCodes';

export default function Features({ limit, countryCode }) {
  const { features } = useStaticQuery(graphql`
    query {
      features: allSanityFeature {
        nodes {
          _id
          name
          info
          image {
            asset {
              gatsbyImageData
            }
          }
          countries {
            countryCode
          }
        }
      }
    }
  `);

  let featureNodes = filterNodeByMultipleCountryCodes(features.nodes, countryCode);

  if (limit > 0) {
    featureNodes = featureNodes.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
      {featureNodes.map((feature) => (
        <div className="text-center" key={feature._id}>
          <GatsbyImage image={feature.image.asset.gatsbyImageData} alt={feature.name} className="h-20 w-20" />
          <h5 className="text-2xl mt-2 md:mt-5 mb-0">{feature.name}</h5>
          <p className="text-gray-500">{feature.info}</p>
        </div>
      ))}
    </div>
  );
}
