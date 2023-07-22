import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import SEO from '../../components/SEO';
import replaceUmlauts from '../../utils/replaceUmlauts';

export default function drivingSchoolsPerCountryPage({ pageContext, data: { drivingSchools } }) {
  const drivingSchoolNodes = drivingSchools.nodes;

  const drivingSchoolsGroupedByRegion = [];
  const drivingSchoolsRegions = [];

  // group by region
  drivingSchoolNodes.forEach((drivingschool) => {
    drivingSchoolsGroupedByRegion[drivingschool.region.name] = [
      ...drivingSchoolsGroupedByRegion[drivingschool.region.name] || [],
      drivingschool,
    ];
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(drivingSchoolsGroupedByRegion)) {
    drivingSchoolsRegions.push({
      regionName: key,
      drivingSchools: value,
    });
  }

  return (
    <Layout countryCode={pageContext.countryCode}>
      <SEO title="Fahrschulen" />

      <Section className="bg-fonline-50">
        <SectionHeader
          title="Fahrschulen"
          subtitle="Die folgenden Fahrschulen wollen nicht nur an euch verdienen, sondern empfehlen die kostenlose Lernplattform F-Online als Alternative. Vielen Dank. Lernen könnt ihr natürlich immer mit F-Online, egal bei welcher Fahrschule in Österreich ihr die Fahrprüfung macht."
        />

        <div>
          {drivingSchoolsRegions.map((region) => (
            <div className="my-10" key={region.regionName}>
              <h3 className="text-2xl text-center font-bold mb-2 text-gray-800">
                <Link to={`/${pageContext.countryCode}/fahrschulen/${replaceUmlauts(region.regionName)}`} className="no-underline">{region.regionName}</Link>
              </h3>
              <div className="w-10 h-0.5 bg-fonline-500 mx-auto mb-3" />
              <h4 className="text-center text-gray-500 max-w-md mx-auto mb-5">{`${region.drivingSchools.length} Fahrschulen in ${region.regionName} empfehlen F-Online`}</h4>
              <div className="flex flex-row flex-wrap justify-center items-center">
                {region.drivingSchools.map((drivingSchool) => (
                  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div
                      className="m-6 p-5 rounded-lg text-center border-b-4 bg-white border-transparent hover:border-fonline-500 hover:shadow-2xl transition-shadow duration-300"
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query ($countryCode: String!) {
    drivingSchools: allSanityDrivingSchool(
        filter: {country: {countryCode: {eq: $countryCode}}}
        sort: {fields: zip}
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
