require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.f-online.at',
    title: 'F-Online',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't9maew4z',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
