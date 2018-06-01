// module.exports = {
//   siteMetadata: {
//     title: 'Gatsby Default Starter',
//   },
//   plugins: [
    
//     {
//       resolve: `gatsby-plugin-typography`,
//       options: {
//         pathToConfigModule: `src/utils/typography.js`,
//       },
//     }
//   ],
// }


module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};