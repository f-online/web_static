import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Team() {
  const { team } = useStaticQuery(graphql`
  query { team: allSanityTeam(
    filter: {countries: {elemMatch: {countryCode: {eq: "at"}}}}
    ) {
      nodes {
        id
        name
        mail
        position
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {team.nodes.map((teammember) => (
        <div className="flex flex-col align-items-center text-center p-5" key={teammember.id}>
          <div className="mx-auto mb-5 relative">
            <GatsbyImage image={teammember.image.asset.gatsbyImageData} alt={teammember.name} className="h-40 w-40 rounded-xl" />
          </div>
          <p className="text-xl p-0">{teammember.name}</p>
          <p className="text-gray-500 p-0">{teammember.position}</p>
        </div>
      ))}
    </div>
  );
}
