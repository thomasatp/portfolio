module.exports = {
  siteMetadata: {
    title: `Thomas Drapeau`,
    description: `My portfolio`,
    siteUrl: `https://thomasdrapeau.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
