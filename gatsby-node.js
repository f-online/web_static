const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  console.info('[CreateStaticPages] Start creating static pages');

  const staticPageTemplate = path.resolve('./src/templates/staticPage.js');

  const { data } = await graphql(`
    query {
      staticPages: allSanityStaticPage {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page
  data.staticPages.nodes.forEach((staticPage) => {
    actions.createPage({
      path: `${staticPage.slug.current}`,
      component: staticPageTemplate,
      context: {
        staticPageId: staticPage.id,
      },
    });
    console.info(
      `[CreateStaticPages] Created page for ${staticPage.title} (path: /${staticPage.slug.current})`,
    );
  });

  console.info('[CreateStaticPages] Finished creating static pages');
};
