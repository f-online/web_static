const path = require('path');
const { title } = require('process');

exports.createPages = async ({ graphql, actions }) => {
  console.info('[CreateStaticPages] Start creating static pages');

  const staticPageTemplate = path.resolve('./src/templates/staticPage.js');

  const { data: { staticPages } } = await graphql(`
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
          }
          seo {
            title
            description
          }
        }
      }
    }
  `);

  staticPages.nodes.forEach((staticPage) => {
    const staticPagePath = `${staticPage.country.countryCode}/${staticPage.slug.current}`;

    actions.createPage({
      path: staticPagePath,
      component: staticPageTemplate,
      context: {
        staticPageId: staticPage.id,
        seo: {
          title: staticPage.seo.title,
          description: staticPage.seo.description,
        },
      },
    });
    console.info(
      `[CreateStaticPages] Created page for ${staticPage.title} (path: /${staticPagePath})`,
    );
  });

  console.info('[CreateStaticPages] Finished creating static pages');
};
