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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
