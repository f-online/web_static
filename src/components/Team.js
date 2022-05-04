import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterNodeByMultipleCountryCodes from '../utils/filterNodeByMultipleCountryCodes';

export default function Team({ countryCode }) {
  const { team } = useStaticQuery(graphql`
  query {
      team: allSanityTeam {
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
          countries {
            countryCode
          }
        }
      }
    }
  `);

  const teamNodes = filterNodeByMultipleCountryCodes(team.nodes, countryCode);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {teamNodes.map((teammember) => (
        <div className="flex flex-col align-items-center text-center p-5" key={teammember.id}>
          <div className="mx-auto mb-5 relative">
            <GatsbyImage
              image={teammember.image.asset.gatsbyImageData}
              alt={teammember.name}
              className="h-32 w-32 rounded-l-xl rounded-t-xl"
              imgStyle={{
                borderBottomLeftRadius: '0.75rem',
                borderTopLeftRadius: '0.75rem',
                borderTopRightRadius: '0.75rem',
              }}
            />
          </div>
          <p className="text-xl text-center p-0">{teammember.name}</p>
          <p className="text-gray-500 text-center p-0">{teammember.position}</p>
        </div>
      ))}
    </div>
  );
}
