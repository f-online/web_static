const path = require('path');

async function generateStaticPages(staticPages, actions) {
  console.info('[GenerateStaticPages] Start generating');

  const template = path.resolve('./src/templates/staticPage.js');
  staticPages.nodes.forEach((staticPage) => {
    if (staticPage.country.render === true) {
      const nodePath = `${staticPage.country.countryCode}/${staticPage.slug.current}/`;

      actions.createPage({
        path: nodePath,
        component: template,
        context: {
          documentId: staticPage.id,
          seo: {
            title: staticPage.seo.title,
            description: staticPage.seo.description,
          },
        },
      });
      console.info(
        `[GenerateStaticPages] Created page for ${staticPage.title} (path: /${nodePath})`,
      );
    } else {
      console.info(`[GenerateStaticPages] Skipped page "${staticPage.title}" due to render flag.`);
    }
  });
  console.info('[GenerateStaticPages] Finished generating');
}

async function generateCountryIndexPages(countries, actions) {
  console.info('[GenerateCountryIndexPages] Start generating');

  const template = path.resolve('./src/templates/countryIndexPage.js');
  countries.nodes.forEach((node) => {
    if (node.render) {
      const nodePath = `${node.countryCode}/`;

      actions.createPage({
        path: nodePath,
        component: template,
        context: {
          documentId: node.id,
          seo: {
            title: node.seo.title,
            description: node.seo.description,
          },
        },
      });
      console.info(
        `[GenerateCountryIndexPages] Created page for ${node.name} (path: /${nodePath})`,
      );
    } else {
      console.info(`[GenerateCountryIndexPages] Skipped country "${node.name}" due to render flag.`);
    }
  });
  console.info('[GenerateCountryIndexPages] Finished generating');

  if (countries.nodes.filter((country) => country.render).length === 1) {
    const activeCountry = countries.nodes.filter((country) => country.render)[0];
    actions.createRedirect({
      fromPath: '/',
      toPath: `/${activeCountry.countryCode}/`,
      isPermanent: true,
    });

    console.info(`[GenerateCountryIndexPages] Created redirect from / to /${activeCountry.countryCode}/ as only one country is active`);
  }
}

async function generateDrivingSchoolPages(drivingSchools, actions) {
  console.info('[GenerateDricingSchoolPages] Start generating');

  const template = path.resolve('./src/templates/drivingSchoolCountry.js');
  drivingSchools.countryCode.forEach((drivingSchoolCountryCode) => {
    const nodePath = `${drivingSchoolCountryCode}/fahrschulen/`;

    actions.createPage({
      path: nodePath,
      component: template,
      context: {
        countryCode: drivingSchoolCountryCode,
      },
    });
    console.info(
      `[GenerateDricingSchoolPages] Created page for Fahrschulen (${drivingSchoolCountryCode}) (path: /${nodePath})`,
    );
  });
  console.info('[GenerateDricingSchoolPages] Finished generating');
}

exports.createPages = async ({ graphql, actions }) => {
  console.info('[SiteGeneration] Fetching data');

  const { data: { staticPages, countries, drivingSchools } } = await graphql(`
    query {
      staticPages: allSanityStaticPage {
        nodes {
          id
          title
          slug {
            current
          }
          country {
            countryCode
            render
          }
          seo {
            title
            description
          }
        }
      }
      countries: allSanityCountry {
        nodes {
          id
          name
          countryCode
          seo {
            title
            description
          }
          render
        }
      }
      drivingSchools: allSanityDrivingSchool {
        nodes {
          id
          name
          region {
            name
          }
          country {
            countryCode
          }
        }
        countryCode: distinct(field: region___country___countryCode)
        regionNames: distinct(field: region___name)
      }
    }
  `);

  // start generating pages
  console.info('[SiteGeneration] Start generating pages');

  await Promise.all([
    generateStaticPages(staticPages, actions),
    generateCountryIndexPages(countries, actions),
    generateDrivingSchoolPages(drivingSchools, actions),
  ]);

  console.info('[SiteGeneration] Finished generating pages');
};
