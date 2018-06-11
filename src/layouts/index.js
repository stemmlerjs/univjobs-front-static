import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/footer'

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
        { property: "og:title" ,  content: "<%= title %>" },
        { property: "og:description" , content: "<%= description %>" },
        { property: "og:type" , content: "<%= type %>" },
        { property: "og:url" , content: "<%= url %>" },
        { property: "og:image" , content: "<%= image %>" },
        { property: "og:image:type" , content: "image/png" },
        { property: "og:image:width" , content: "200" },
        { property: "og:image:height" , content: "200" },

        // Google Tracking
        { name: "google-site-verification", content: "hnc0xMxaywTkrqjaD9-r57vX4SF8YTRpQtaiORbyuzk" },

        // SEO Keywords
        { name:"keywords", content:"univjobs, studentjobs, internship, part-time work" }, 
        { name:"author", content:"UnivJobs Team" }
      ]}

      /**
       * Load stylesheets and fonts here.
       */

      link={[
        { href: "https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900", rel: "stylesheet" },
        { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css", rel:"stylesheet", type:"text/css" },
        { href: 'https://fonts.googleapis.com/css?family=Nunito:400,700"', rel:"stylesheet", type:"text/css" }
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
        paddingTop: '73px'
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
