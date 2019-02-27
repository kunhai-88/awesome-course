module.exports = {
  pathPrefix: '/awesome-course',
  siteMetadata: {
    siteUrl: `https://ifrontend-xyz.github.io/awesome-course/`,
    title: 'Awesome Course',
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
          // baidu analytics siteId
        siteId: "cb11b7f874cdce3663bf22703c3e62ab",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
  ]
};
