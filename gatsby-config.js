require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.f-online.app',
    title: 'F-Online',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't9maew4z',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://piwik.inlupus.at/',
        matomoPhpScript: 'matomo.php',
        matomoJsScript: 'matomo.js',
        siteUrl: '*.f-online.app',
        dev: true,
      },
    },
  ],
  trailingSlash: 'always',
};
