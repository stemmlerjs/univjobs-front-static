import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import { Header } from '../components/shared'
import { Header } from 'univjobs-ui-components'
import 'univjobs-ui-components/build/index.css'

import Footer from '../components/Footer'
import config from '../config'
import meta from './meta'
import links from './links'
import scripts from './scripts'

import './styles.sass'
import '../styles/rodal.css'

/**
 * Layout
 *
 * @desc The layout is the main component for the entire
 * app. Think of it as the skeleton of the project.
 * We set the default Helmet meta tags which can be overriden
 * by any child component later in the full rendering of this
 * component's childen.
 */

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={meta}
      link={links}
      script={scripts}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      appUrl={config.appUrl}
      staticUrl={config.staticUrl}
      linkComponent={Link}
      // TODO: Implement these with an external API call
      // that will allow us to do so.
      isAuthenticating={false}
      isAuthenticated={false}
      profilePicture={null}
      isAStudent={false}
    />
    <div
      style={{
        margin: '0px auto',
        paddingTop: '71px',
      }}
    >
      {children()}
    </div>
    <Footer />
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
