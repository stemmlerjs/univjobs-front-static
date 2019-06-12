const path = require('path')
let activeEnv = process.env.ACTIVE_ENV

if (!activeEnv) {
  activeEnv = 'development'
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const plugins = [
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '@': path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src/components'),
    },
  },
  'gatsby-plugin-robots-txt',
  {
    resolve: 'gatsby-univjobs-api',
    options: {
      url: process.env.UNIVJOBS_DATASOURCE_URL,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-101892655-1',
      // Puts tracking script in the head instead of the body
      head: false,
      // Avoids sending pageview hits from custom paths
      exclude: ['/admin/**', '/do-not-track/me/too/'],
    },
  },
  {
    resolve: `gatsby-plugin-amplitude-analytics`,
    options: {
      // Specify the API key for your Amplitude Project (required)
      apiKey: process.env.AMPLITUDE_API_KEY,
      // Puts tracking script in the head instead of the body (optional)
      head: false,
      // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
      respectDNT: false,
      // Avoids sending pageview hits from custom paths (optional)
      exclude: ['/preview/**', '/do-not-track/me/too/'],
      // Override the default event types (optional)
      eventTypes: {
        outboundLinkClick: 'OUTBOUND_LINK_CLICK',
        pageView: 'PAGE_VIEW',
      },
      // Amplitude JS SDK configuration options (optional)
      amplitudeConfig: {
        saveEvents: true,
        includeUtm: true,
        includeReferrer: true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: './src/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
  },
  `gatsby-plugin-compression`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  },
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [require('autoprefixer')()],
      precision: 8,
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://univjobs.us16.list-manage.com/subscribe/post?u=2e6e428ab7c1031ddbc5e069a&amp;id=358d25a1d2"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/img`,
      name: 'images',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [],
    },
  },
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },
  'gatsby-plugin-netlify', // make sure to keep it last in the array
]

if (activeEnv === 'production') {
  plugins.push({
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: '336246053615452',
    },
  })
}

module.exports = {
  siteMetadata: {
    title: 'Univjobs - Simplifying hiring post-secondary students',
    siteUrl: `https://univjobs.ca`,
  },
  plugins: plugins,
}