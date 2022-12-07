const path = require(`path`);

module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: `Thomas Drapeau`,
    description: `UI designer et front end developer en devenir.`,
    siteUrl: `https://thomasdrapeau.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-mdx",
  ],
};
