module.exports = {
  siteMetadata: {
    title: `Fabian Heussner Portfolio`,
    description: `Design Portfolio`,
    author: `Fabian Heussner`,
    siteUrl: 'https://www.fabianheussner.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fabian Heussner Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/fabianheussner-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`400`, `500`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.fabianheussner.com',
        sitemap: 'https://www.fabianheussner.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#556FF2',
        // Height of the scroll indicator
        height: '3px',
        // Configure paths where the scroll indicator will appear
        // paths: ['/', '/blog/**'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
  ],
}
