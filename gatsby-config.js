const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Thomas Drapeau`,
    description: `My portfolio`,
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
