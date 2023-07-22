import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonLink from '../../components/ButtonLink';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import SEO from '../../components/SEO';

export default function drivingSchoolsPerCountryPage({ pageContext, data: { drivingSchools } }) {
  const drivingSchoolNodes = drivingSchools.nodes;

  return (
    <Layout countryCode={pageContext.countryCode}>
      <SEO title={`Fahrschulen in ${pageContext.regionName}`} />

      <Section className="bg-fonline-50">
        <SectionHeader
          title={`Fahrschulen in ${pageContext.regionName}`}
          subtitle={`Unterstützt eure lokalen Fahrschulen in ${pageContext.regionName}, die auch F-Online unterstützen. Genau diese Fahrschulen wollen nicht nur euer Geld, sondern Sie wollen euch etwas beibringen: Spaß am Fahren!`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {drivingSchoolNodes.map((drivingSchool) => (
            <div
              className="p-5 rounded-lg text-center border-b-4 hover:bg-white border-transparent hover:border-fonline-500 hover:shadow-2xl transition-shadow duration-300"
              key={drivingSchool._id}
            >
              <div className="flex items-center justify-center h-40 mb-3">
                <GatsbyImage
                  image={drivingSchool.logo.asset.gatsbyImageData}
                  alt={drivingSchool.name}
                />
              </div>
              <div>
                <strong>{drivingSchool.name}</strong>
                <br />
                {drivingSchool.street}
                <br />
                {`${drivingSchool.zip} ${drivingSchool.city}`}
                <br />
                <a href={drivingSchool.url}>{drivingSchool.url}</a>
                <br />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <ButtonLink to={`/${pageContext.countryCode}/fahrschulen`} text="Alle Fahrschulregionen anzeigen" />
        </div>

      </Section>
    </Layout>
  );
}

export const query = graphql`
  query ($regionId: String!) {
    drivingSchools: allSanityDrivingSchool(
    filter: {region: {_id: {eq: $regionId}}}
    sort: {zip: ASC}
  ) {
        nodes {
          _id
          name
          zip
          street
          city
          region {
            name
          }
          url
          logo {
            asset {
              gatsbyImageData
            }
          }
        }
      }
  }
`;
