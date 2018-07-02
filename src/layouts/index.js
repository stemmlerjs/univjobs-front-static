import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import config from '../config'
console.log(config)

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}

      /**
       * Load metadata here
       */

      meta={[
        // Server side rendering meta data
        { property: "fb:app_id" , content: "1897052653882765" },
        { property: "og:title" ,  content: "Univjobs | Simplifying hiring post-secondary students" },
        { property: "og:description" , content: "A place where you can find jobs to earn cash and launch your career." },
        { property: "og:type" , content: "website" },
        { property: "og:url" , content: config.url },
        { property: "og:image" , content: `${config.url}${config.logo}` },
        { property: "og:image:type" , content: "image/png" },
        { property: "og:image:width" , content: "200" },
        { property: "og:image:height" , content: "200" },

        // Google Tracking
        { name: "google-site-verification", content: "hnc0xMxaywTkrqjaD9-r57vX4SF8YTRpQtaiORbyuzk" },

        // SEO Keywords
        { name:"keywords", content:"univjobs, studentjobs, internship, part-time work" }, 
        { name:"author", content: "UnivJobs Team" }
      ]}

      /**
       * Load stylesheets and fonts here.
       */

      link={[
        { href: "https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900", rel: "stylesheet" },
        { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css", rel:"stylesheet", type:"text/css" },
        { href: 'https://fonts.googleapis.com/css?family=Nunito:400,700"', rel:"stylesheet", type:"text/css" },
        { href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700,700i', rel: 'stylesheet' }
      ]}

      /**
       * Load Script tags here
       */

      script={[
        { async: "", src:"https://chimpstatic.com/mcjs-connected/js/users/2e6e428ab7c1031ddbc5e069a/dbb6d582d19fcbda7bdd240ed.js" },
        { type:"text/javascript", async:"", src:"https://js.driftt.com/include/1527753900000/uvrdu82um6f9.js" },
        { async:"", src:"https://www.googletagmanager.com/gtm.js?id=GTM-53RBHNC" },
        { id: "facebook-jssdk", src:"//connect.facebook.net/en_US/sdk.js" },
        // { type:"text/javascript", async:"", src:"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" },
        // { async:"", src:"https://www.google-analytics.com/analytics.js" }
      ]}

    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0px auto',
        paddingTop: '71px'
      }}
    >
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
