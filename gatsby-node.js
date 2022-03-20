const path = require('path');

async function generateStaticPages(staticPages, actions) {
  console.info('[GenerateStaticPages] Start generating');

  const template = path.resolve('./src/templates/staticPage.js');
  staticPages.nodes.forEach((staticPage) => {
    if (staticPage.country.render === true) {
      const nodePath = `${staticPage.country.countryCode}/${staticPage.slug.current}`;

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
  console.info('[GenerateCountryIndexPagesStaticPages] Start generating');

  const template = path.resolve('./src/templates/countryIndexPage.js');
  countries.nodes.forEach((node) => {
    if (node.render) {
      const nodePath = `${node.countryCode}`;

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
        `[GenerateCountryIndexPagesStaticPages] Created page for ${node.name} (path: /${nodePath})`,
      );
    } else {
      console.info(`[GenerateCountryIndexPagesStaticPages] Skipped country "${node.title}" due to render flag.`);
    }
  });
  console.info('[GenerateCountryIndexPagesStaticPages] Finished generating');
}

exports.createPages = async ({ graphql, actions }) => {
  console.info('[SiteGeneration] Fetching data');

  const { data: { staticPages, countries } } = await graphql(`
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
    }
  `);

  // start generating pages
  console.info('[SiteGeneration] Start generating pages');

  await Promise.all([
    generateStaticPages(staticPages, actions),
    generateCountryIndexPages(countries, actions),
  ]);

  console.info('[SiteGeneration] Finished generating pages');
};
