import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function Team({ className }) {
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
    <Section className={className}>
      <SectionHeader
        title="Unser Team"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.nodes.map((teammember) => (
          <div className="flex flex-col align-items-center text-center p-5" key={`team${teammember.id}`}>
            <div className="mx-auto mb-5 relative">
              <GatsbyImage image={teammember.image.asset.gatsbyImageData} alt={teammember.name} className="h-40 w-40 rounded-full" />
              <a href={`mailto:${teammember.mail}`} className="absolute h-6 w-6 right-0 bottom-2 p-5 bg-fonline-500 hover:bg-fonline-700 rounded-l-xl rounded-t-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white absolute top-2 left-[0.5rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>
            <p className="text-xl p-0">{teammember.name}</p>
            <p className="text-gray-500 p-0">{teammember.position}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
