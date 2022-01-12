import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Features({ limit }) {
  const { features } = useStaticQuery(graphql`
  query {
    features: allSanityFeature(filter: {countries: {elemMatch: {countryCode: {eq: "at"}}}}) {
      nodes {
        id
        name
        info
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`);

  let featureNodes = features.nodes;

  if (limit > 0) {
    featureNodes = featureNodes.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {featureNodes.map((feature) => (
        <div className="text-center" key={`feature${feature.id}`}>
          <GatsbyImage image={feature.image.asset.gatsbyImageData} alt={feature.name} className="h-40 w-40" />
          <h5 className="text-2xl mt-10 mb-0">{feature.name}</h5>
          <p className="text-gray-500">{feature.info}</p>
        </div>
      ))}
    </div>
  );
}
